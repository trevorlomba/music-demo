import React, { Component, useEffect, useState } from 'react'
import {stripHtml} from 'string-strip-html'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import commerce from '../lib/commerce'

const ProductItem = ({
	product,
	onAddToCart,
	size,
	updateSize,
	active,
	item,
	cart,
	itemQty,
	setItemQty,
	handleUpdateFeature,
	products,
	lagCorrect,
	setLagCorrect,
	color,
	updateColor,
	feature
}) => {
	let { result } = ''
	const [colorObject, setColorObject] = useState({})
	const [sizeObject, setSizeObject] = useState({})
	const [variantObject, setVariantObject] = useState({})
	const renderable = product && product.variant_groups
	const [productImage, setProductImage] = useState()

	useEffect(() => {
		result = product ? stripHtml(product.description, item) : ''
		let temp =
			cart === null ? cart.line_items.find(({ id }) => id === product.id) : ''
		variant()
	}, [])

	useEffect(() => {
		console.log(variantObject)
		console.log(product)
		console.log(product?.assets?.find(({ id }) => id === product.variant_groups.find(({ name }) => name === 'Color').options[color].assets[0]).url, [variantObject])})

	useEffect(() => {
		const temp = {}
		temp[colorObject.name] = colorObject.variant
		temp[sizeObject.name] = sizeObject.variant
		setVariantObject(temp)
		console.log(colorObject)
		console.log(sizeObject)
		console.log(temp)
	}, [colorObject, sizeObject])

	useEffect(() => {
		const temp = renderable
			? {
					name: product.variant_groups.find(({ name }) => name === 'Color').id,
					variant: product.variant_groups.find(({ name }) => name === 'Color')
						.options[color].id,
			  }
			: ''
			
		setColorObject(temp)
	}, [color, feature, product])
		
	useEffect(() => {
		const temp = renderable
			? {
					name: product.variant_groups.find(({ name }) => name === 'Size').id,
					variant: product.variant_groups.find(({ name }) => name === 'Size')
						.options[size].id,
			  }
			: ''
		setSizeObject(temp)
	}, [size, feature, product])

	const incrementCount = (qty) => {
		const tempLag = lagCorrect + qty
		setLagCorrect(tempLag)
	}
	const incrementTotal = (qty) => {
		let temp = itemQty + qty
		setItemQty(temp)
	}

	const renderCount = () => {
		return cart.line_items &&
			cart.line_items.find(
				({ product_id }) => product_id === products[active].id
			)
			? cart.line_items.find(
					({ product_id }) => product_id === products[active].id
			  ).quantity
			: 0
	}

	const handleAddToCart = (product, qty) => {
		console.log(sizeObject)
		console.log(colorObject)
		console.log(variantObject)
		if (qty < 0 && itemQty <= 0) {
			return null
		} else {
			console.log('this it ' + itemQty)
			incrementCount(qty)
			incrementTotal(qty)
			onAddToCart(product, qty, variantObject)
		}
	}

	const handleUpdateSize = (e) => {
		const currentValue = e.target.value
		updateSize(currentValue)
	}


	const renderSizes = () => {

		return (
			<>
				<div>
					<select
						value={size}
						name='Choose a Size'
						onChange={(e) => handleUpdateSize(e)}
						className='checkout__select'>
						<option className='checkout__option' disabled>
							Choose a Size
						</option>
						{product.variant_groups
							.find(({ name }) => name === 'Size')
							.options.map((sizeOption, i) => {
								return (
									<option value={i} key={i}>
										{sizeOption.name.replace(/[^A-Z]+/g, '')}
									</option>
								)
							})}
						;
					</select>
				</div>
			</>
		)
	}
	const renderColors = () => {

		return (
			<>

				<div className='color_select'>

					<div className='color_select_label'>
						<span>Color: </span>
						{renderable ? 
							product.variant_groups.find(({ name }) => name === 'Color')
								.options
						[color].name : ''}
					</div>
					{product.variant_groups
						.find(({ name }) => name === 'Color')
						.options.map((colorOption, i) => (
							<>
								<button
									className={`${
										color === i
											? 'active-color-button'
											: 'inactive-color-button'
									} color-button ${colorOption.name.toLowerCase()}`}
									onClick={() => updateColor(i)}></button>
							</>
						))}
				</div>
			</>
		)
	}


	const variant = () => {
		if (commerce.products && product && product.id) {
			commerce.products.getVariants(product.id, {}).then((variants) => {
				console.log(variants.data)
			})
		}
	}

	return (
		<>
			{product ? (
				<div className='product__card'>
					<h4 className='product__name'>{product.name}</h4>
					<img
						className='product__image'
						src={product?.assets ? 
							product?.assets?.find(
								({ id }) =>
									id ===
									product.variant_groups.find(({ name }) => name === 'Color')
										.options[color].assets[0]
							).url : ''
						}
						alt={product.name}
						onClick={handleUpdateFeature}
					/>
					<div className='product__info'>
						<p className='product__description'>
							{result}
						</p>
						<div className='product__details'>
							<p className='product__price'>
								{product.price.formatted_with_symbol}
							</p>
						</div>
					</div>
					<div>{renderable ? renderColors() : ''}</div>
					<div>
						<div>{renderable ? renderSizes() : ''}</div>
						<button
							onClick={() => handleAddToCart(product.id, -1)}
							className={'merch-button increment-button increment-left'}>
							<span>-</span>
						</button>
						<button className='merch-button'>
							<span>
								{renderCount() + lagCorrect} in cart
							</span>
						</button>
						<button
							onClick={() => {
								handleAddToCart(product.id, 1)
							}}
							className={
								'merch-button increment-button increment-button-right'
							}>
							<span>+</span>
						</button>
					</div>
				</div>
			) : (
				'Loading...'
			)}
		</>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object,
}

export default ProductItem

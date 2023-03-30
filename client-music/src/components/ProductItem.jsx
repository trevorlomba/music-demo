import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

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

	// useEffect(() => {
	// 	result = product ? stripHtml(product.description, item) : ''
	// 	let temp =
	// 		cart === null ? cart.line_items.find(({ id }) => id === product.id) : ''
	// 	variant()
	// }, [])

	// useEffect(() => {
	// 	console.log(variantObject)
	// 	console.log(product)
	// 	console.log(product?.assets?.find(({ id }) => id === product.variant_groups.find(({ name }) => name === 'Color').options[color].assets[0]).url, [variantObject])})

useEffect(() => {
	if (renderable && product && product.variant_groups) {
		const colorTemp = {
			name:
				product.variant_groups.find(({ name }) => name === 'Color')?.id || '',
			variant:
				product.variant_groups.find(({ name }) => name === 'Color')?.options[
					color
				]?.id || '',
		}
		setColorObject(colorTemp)

		const sizeTemp = {
			name:
				product.variant_groups.find(({ name }) => name === 'Size')?.id || '',
			variant:
				product.variant_groups.find(({ name }) => name === 'Size')?.options[
					size
				]?.id || '',
		}
		setSizeObject(sizeTemp)
		const tempVariantObject = {}
		tempVariantObject[colorObject.name] = colorObject?.variant
		tempVariantObject[sizeObject.name] = sizeObject?.variant
		setVariantObject(tempVariantObject)
	} else {
		console.error('Unable to set variant objects:', { renderable, product })
	}
}, [color, feature, product, renderable, size])

const incrementLagCorrect = (quantity) => {
	const newLagCorrect = lagCorrect + quantity
	setLagCorrect(newLagCorrect)
}

const incrementItemQty = (quantity) => {
	const newQty = itemQty + quantity
	setItemQty(newQty)
}


	const getLineItemCount = () => {
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
		if (qty < 0 && itemQty <= 0) {
			return null
		} else {
			incrementLagCorrect(qty)
			incrementItemQty(qty)
			onAddToCart(product, qty, variantObject)
		}
	}

	const handleUpdateSize = (e) => {
		const newSize = e.target.value
		updateSize(newSize)
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
						{renderable
							? product.variant_groups.find(({ name }) => name === 'Color')
									.options[color].name
							: ''}
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
									onClick={() => updateColor(i)}
									key={i}></button>
							</>
						))}
				</div>
			</>
		)
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
								{getLineItemCount() + lagCorrect} in cart
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

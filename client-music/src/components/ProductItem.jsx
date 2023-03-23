import React, { Component, useEffect, useState } from 'react'
import {stripHtml} from 'string-strip-html'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import commerce from '../lib/commerce'

const ProductItem = ({
	product,
	onAddToCart,
	updateFeature,
	size,
	updateSize,
	incrementQuantity,
	decrementQuantity,
	active,
	cartQtyObj,
	handleUpdateCartQty,
	item,
	cart,
	cartTotal,
	setCartTotal,
	itemQty,
	setItemQty,
	countQuantity,
	handleUpdateFeature,
	products,
	lagCorrect,
	setLagCorrect,
	color,
	setColor,
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
		// console.log(product, cart, itemQty)
		let temp =
			cart === null ? cart.line_items.find(({ id }) => id === product.id) : ''
		// setItemQty(temp)
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

	// useEffect(() => {
	// 	setColor(0)
	// 	updateSize(0)
	// 	console.log(size)
	// 	console.log(color)
	// }, [product.name, setColor])

	useEffect(() => {
		// const colorCheck = () =>{
		// 	if(!product.variant_groups.find(({ name }) => name === 'Color')){
		// 		console.log('nah')
		// 		return
		// 	}}
		

		// colorCheck()
		const temp = renderable
			? {
					name: product.variant_groups.find(({ name }) => name === 'Color').id,
					variant: product.variant_groups.find(({ name }) => name === 'Color')
						.options[color].id,
			  }
			: ''
			
		setColorObject(temp)
		console.log(color)
		console.log(
			product && product.assets
				? product.assets.find(
						({ id }) => id === product.variant_groups[1].options
				  )
				: 'dd'
		)
		console.log(
			product && product.assets
				? product.assets.find(
						({ id }) => id === product.variant_groups[1].options[0].assets[0]
				  )
				: 'dd'
		)
		console.log(
			product && product.assets
				? product.variant_groups.find(({ name }) => name === 'Color').options[color]
						.id
				: 'dd'
		)
		console.log(
			product && product.assets
				? product.variant_groups.find(({ name }) => name === 'Color').options[color].assets[0]
				: 'dd'
		)
		console.log(
			product && product.assets
				? product.variant_groups.find(({ name }) => name === 'Color').options[color]
				: 'dd'
		)
		// console.log(temp) 
		// newVariants()
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
		// console.log(temp)
		// newVariants()

	}, [size, feature, product])

		
	// useEffect(() => {
	// 	if (cart && cart.total_items) {
	// 	countQuantity()
	// 	// setItemQty(() => renderCount())
	//  } else {return}
	// }, [cart.total_items])

	const incrementCount = (qty) => {
		const tempLag = lagCorrect + qty
		setLagCorrect(tempLag)
		// console.log(itemQty)
	}
	const incrementTotal = (qty) => {
		let temp = itemQty + qty
		setItemQty(temp)
	}

	const renderCount = () => {
		// console.log(
		// 	cart && cart.total_unique_items && cart.line_items.length > 0
		// 		? cart.line_items.find(
		// 				({ product_id }) => product_id === products[active].id
		// 		  )
		// 		: ''
		// )
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
		// console.log(product.variant_groups[0].options)
		return (
			<>
				{/* <div>hi</div> */}
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
					{/* {products[active].variant_groups.find(({ name }) => name === 'Size').options.map( */}
				</div>
				{/* <div>
					{sizeObject.name}
					{sizeObject.variant}
				</div> */}
				{/* <div className='products' id='products'>
					{products.map((product) => (
						<ProductItem
							key={product.id}
							product={product}
							onAddToCart={onAddToCart}
						/>
					))}
				</div> */}
			</>
		)
	}
	const renderColors = () => {
		// console.log(product.variant_groups.find(({name}) => name === "Color").name)
		// console.log(product.variant_groups[1].name)
		// console.log(product.variant_groups[0].name)
		return (
			<>
				{/* <div>hi</div> */}
				<div className='color_select'>
					{/* {products[active].variant_groups.find(({ name }) => name === 'Size').options.map( */}
					<div className='color_select_label'>
						<span>Color: </span>
						{/* {colorObject.name} */}
						{/* {colorObject.variant} */}
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
								{/* <span>
								{product.variant_groups.find(({ name }) => name === 'Color').id}
								,{' '}
								{
									product.variant_groups.find(({ name }) => name === 'Color')
										.options[i].id
								}
							</span> */}
							</>
						))}
				</div>

				{/* <div className='products' id='products'>
					{products.map((product) => (
						<ProductItem
							key={product.id}
							product={product}
							onAddToCart={onAddToCart}
						/>
					))}
				</div> */}
			</>
		)
	}


	const variant = () => {
		// products[active]variant_groups[0].options[1]
		if (commerce.products && product && product.id) {
			// console.log(product.id)
			commerce.products.getVariants(product.id, {}).then((variants) => {
				console.log(variants.data)
				// console.log(product)
				// console.log(products[active].variant_groups[0].options[size])
				// console.log(
					// products[active].variant_groups.find(({ name }) => name === 'Size')
					// 	.name)
				// console.log(
				// 	products[active].variant_groups.find(({ name }) => name === 'Size')
				// 		.options[size].name
				// )
			})
		}
	}

	// const renderItems = () =>
	// 	cart.line_items.map((lineItem) => (
	// 		<>
	// 			{/* <CartItem
	// 				item={lineItem}
	// 				key={lineItem.id}
	// 				onUpdateCartQty={handleUpdateCartQty}
	// 				className='cart__inner'
	// 			/> */}
	// 			<p>'d'</p>
	// 		</>
	// 	))

	return (
		<>
			{product ? (
				<div className='product__card'>
					<h4 className='product__name'>{product.name}</h4>
					<img
						className='product__image'
						// src={product.assets?.find(({{id}}) => product.variant_groups.find(({ name }) => name === 'Color').options[color].assets[0])?.url}
						src={product?.assets ? 
							product?.assets?.find(
								({ id }) =>
									id ===
									product.variant_groups.find(({ name }) => name === 'Color')
										.options[color].assets[0]
							).url : ''
						}
						// src={product.image?.url}
						alt={product.name}
						onClick={handleUpdateFeature}
					/>
					<div className='product__info'>
						<p className='product__description'>
							{/* product description stripped of html tags */}
							{result}
						</p>
						<div className='product__details'>
							<p className='product__price'>
								{product.price.formatted_with_symbol}
							</p>
							{/* <button
						name='Add to cart'
						className='product__btn'
						onClick={handleAddToCart}>
						Quick add
					</button> */}
						</div>
					</div>
					{/* <div>
						<span>{total}</span>
						<button
						className={`${
							size === 0 ? 'active-size' : 'inactive-size'
						} size-button`}
						onClick={() => updateSize(0)}>
						S
						</button>
						<button
						className={`${
							size === 1 ? 'active-size' : 'inactive-size'
						} size-button `}
						onClick={() => updateSize(1)}>
						M
						</button>
						<button
						className={`${
							size === 2 ? 'active-size' : 'inactive-size'
						} size-button `}
						onClick={() => updateSize(2)}>
						L
						</button>
					</div> */}
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
								{/* {renderCount()} */}
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
					{/* <button type='button' onClick={() => onAddToCart(product.id, -1)}>
						-
					</button>
					<span>{product.quantity}</span>
					<button
						type='button'
						onClick={() => {
							console.log(product)
							onAddToCart(product.id, 1)
						}}>
						+
					</button> */}
					{/* {renderItems()} */}
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

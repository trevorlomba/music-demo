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
	setLagCorrect
}) => {
	let { result } = ''

	useEffect(() => {
		result = product ? stripHtml(product.description, item) : ''
		// console.log(product, cart, itemQty)
		let temp =
			cart === null ? cart.line_items.find(({ id }) => id === product.id) : ''
		// setItemQty(temp)
		variant()
	})

	// useEffect(() => {
	// 	if (cart && cart.total_items) {
	// 	countQuantity()
	// 	// setItemQty(() => renderCount())
	//  } else {return}
	// }, [cart.total_items])

	const incrementCount = (qty) => {
		const tempLag = lagCorrect + qty
		setLagCorrect(tempLag)
		console.log(itemQty)
	}
	const incrementTotal = (qty) => {
		let temp = itemQty + qty
		setItemQty(temp)
	}

	const renderCount = () => {
		console.log(
			cart && cart.total_unique_items &&
			cart.line_items.length > 0 ? cart.line_items.find(
				({ product_id }) => product_id === products[active].id
			) : ''
		)
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
			console.log('this it ' + itemQty)
			incrementCount(qty)
			incrementTotal(qty)
			onAddToCart(product, qty)
		}
	}


   const variant = () => {
			// products[active]variant_groups[0].options[1]
			if (commerce.products && product && product.id) {
				console.log(product.id)
				commerce.products.getVariants(product.id, {}).then((variants) => {
					console.log(variants.data)
					console.log(product)
					console.log(products[active].variant_groups[0].options[size])
					console.log(products[active].variant_groups.find(({ name } ) => name === 'Size').name)
					console.log(products[active].variant_groups.find(({ name } ) => name === 'Size').options[size].name)
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
					<img
						className='product__image'
						src={product.image?.url}
						alt={product.name}
						onClick={handleUpdateFeature}
					/>
					<div className='product__info'>
						<h4 className='product__name'>{product.name}</h4>
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
					<div>
						{/* <span>{total}</span> */}
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
					</div>
					<div>
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

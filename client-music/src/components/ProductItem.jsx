import React, { Component } from 'react'
import {stripHtml} from 'string-strip-html'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

const ProductItem = ({ product, onAddToCart, updateFeature, size, updateSize, incrementQuantity, decrementQuantity, active, cartQtyObj, handleUpdateCartQty, item, cart }) => {
	const { result } = stripHtml(product.description, item)

    const handleAddToCart = () => {
			onAddToCart(product.id, 1)
		}

	const renderItems = () =>
		cart.line_items.map((lineItem) => (
			<>
				{/* <CartItem
					item={lineItem}
					key={lineItem.id}
					onUpdateCartQty={handleUpdateCartQty}
					className='cart__inner'
				/> */}
				<p>'d'</p>
			</>
		))

	return (
		<div className='product__card'>
			<img
				className='product__image'
				src={product.image?.url}
				alt={product.name}
				onClick={updateFeature}
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
						size === 'small' ? 'active-size' : 'inactive-size'
					} size-button`}
					onClick={() => updateSize('small')}>
					S
				</button>
				<button
					className={`${
						size === 'medium' ? 'active-size' : 'inactive-size'
					} size-button `}
					onClick={() => updateSize('medium')}>
					M
				</button>
				<button
					className={`${
						size === 'large' ? 'active-size' : 'inactive-size'
					} size-button `}
					onClick={() => updateSize('large')}>
					L
				</button>
			</div>
			<div>
				<button
					onClick={decrementQuantity}
					className={'merch-button increment-button increment-left'}>
					<span>-</span>
				</button>
				<button className='merch-button'>
					<span>{cartQtyObj[active][size]} in cart</span>
				</button>
				<button
					onClick={() => 
					{ 
						onAddToCart(product.id, 1)
						incrementQuantity()
					}}
					className={'merch-button increment-button increment-button-right'}>
					<span>+</span>
				</button>
			</div>
			<button
				type='button'
				onClick={() => onAddToCart(product.id, -1)}>
				-
			</button>
			<span>{product.quantity}</span>
			<button
				type='button'
				onClick={() => 
					{console.log(product) 
				onAddToCart(product.id, 1)}}>
				+
			</button>
			{renderItems()}
		</div>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object,
}

export default ProductItem

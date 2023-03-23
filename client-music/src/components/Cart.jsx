import React, { Component, useEffect } from 'react'
import CartItem from './CartItem'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { RiTruckLine } from 'react-icons/ri'

const Cart = ({ cart, onEmptyCart, onUpdateCartQty, products }) => {
	const handleEmptyCart = () => {
		onEmptyCart()
	}

	const renderEmptyMessage = () => {
		if (cart.total_unique_items > 0) {
			return
		}

		return (
			<p className='cart__none'>
				You have no items in your shopping cart, start adding some!
			</p>
		)
	}

	const renderItems = () =>
		cart.line_items.map((lineItem) => (
			<CartItem
				item={lineItem}
				key={lineItem.id}
				onUpdateCartQty={onUpdateCartQty}
				className='cart__inner'
			/>
		))

	const renderTotal = () => (
		<div className='cart__total'>
			<p className='cart__total-title'>Subtotal:</p>
			<p className='cart__total-price'>{cart.subtotal.formatted_with_symbol}</p>
		</div>
	)

	useEffect(() => console.log(products, cart.line_items), [])

	return (
		<div className='cart'>
			<h4 className='cart__heading'>Your Shopping Cart</h4>

			<button className='cart__btn-empty' onClick={handleEmptyCart}>
				Empty cart
			</button>
			<Link className='cart__btn-checkout cart__btn-text' to='/checkout'>
				{/* <RiTruckLine className='cart__btn-text' /> */}
				Checkout
			</Link>
			{renderEmptyMessage()}
			{cart.line_items.map((lineItem) => (
				<CartItem
					item={lineItem}
					key={lineItem.id}
					onUpdateCartQty={onUpdateCartQty}
					className='cart__inner'
				/>
			))}
			{renderTotal()}
			<div className='cart__footer'>
				{/* <button className='cart__btn-empty'>Empty cart</button> */}

				<Link className='cart__btn-checkout cart__btn-text' to='/checkout'>
					{/* <RiTruckLine className='cart__btn-text' /> */}
					Checkout
				</Link>
			</div>
		</div>
	)
}

Cart.propTypes = {
	cart: PropTypes.object,
	onEmptyCart: () => {},
}

export default Cart

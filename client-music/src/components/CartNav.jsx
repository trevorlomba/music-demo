import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart from './Cart'
import { NavLink } from 'react-router-dom'

const CartNav = ({ cart, onRemoveFromCart, onUpdateCartQty, onEmptyCart, products }) => {
	const [isCartVisible, setCartVisible] = useState(false)

	const renderOpenButton = () => (
		<button className='nav__cart-btn--open'>
			<FontAwesomeIcon size='2x' icon='shopping-bag' color='#292B83' />
			{cart !== null ? <span>{cart.total_items}</span> : ''}
		</button>
	)

	const renderCloseButton = () => (
		<button className='nav__cart-btn--close'>
			<FontAwesomeIcon size='1x' icon='times' color='white' />
		</button>
	)

	return (
		<div className='nav'>
			<div className='nav__cart' onClick={() => setCartVisible(!isCartVisible)}>
				{!isCartVisible ? renderOpenButton() : renderCloseButton()}
			</div>
			{isCartVisible && (
				<Cart
					cart={cart}
					onUpdateCartQty={onUpdateCartQty}
					onEmptyCart={onEmptyCart}
                    products={products}
				/>
			)}
			<NavLink
				to='cart'>um
			</NavLink>
		</div>
	)
}

export default CartNav

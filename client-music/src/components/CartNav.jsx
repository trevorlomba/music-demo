import { React, useState } from 'react'
import Cart from './Cart'
import { NavLink } from 'react-router-dom'
import { RiShoppingBagLine } from 'react-icons/ri'

const CartNav = ({
	cart,
	onRemoveFromCart,
	onUpdateCartQty,
	onEmptyCart,
	products,
	visibility,
	cartTotal,
}) => {
	const [isCartVisible, setCartVisible] = useState(false)
	
	const renderTotal = () => {
			return <>{cartTotal}</>
		}

	const renderOpenButton = () => (
		<>
			<RiShoppingBagLine
				className={`${visibility} shopping-cart `}
				color='white'
			/>
			{cart.id ? (
				<div className={`${visibility} cart-count`}>
					<div className='cart-count-text'>{renderTotal()}</div>
				</div>
			) : (
				<div className={`${visibility} cart-count`}>
					<div className='cart-count-text'>{'?'}</div>
				</div>
			)}
		</>
	)

	const renderCloseButton = () => (
		<RiShoppingBagLine
			color='#d00'
			className={`${visibility} shopping-cart `}
		/>
	)

	return (
		<div className='nav'>
			<div className='nav__cart' onClick={() => setCartVisible(!isCartVisible)}>
				{isCartVisible && cart?.id ? renderCloseButton() : renderOpenButton()}
			</div>
			{isCartVisible && cart?.id && (
				<Cart
					cart={cart}
					onUpdateCartQty={onUpdateCartQty}
					onEmptyCart={onEmptyCart}
					products={products}
				/>
			)}
		</div>
	)
}

export default CartNav

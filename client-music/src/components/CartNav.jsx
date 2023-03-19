import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

	// 	return (
	// 		<>
	// 			<div className={`${visibility} shopping-cart `}>
	// 				<RiShoppingBagLine className={`${visibility}`} />
	// 			</div>
				
	// 		</>
	// 	)
	// }

	const renderOpenButton = () => (<>
			<RiShoppingBagLine
				className={`${visibility} shopping-cart `}
				color='white' />
			{cart !== null ? (
				
					<div className={`${visibility} cart-count`}>
						<div className='cart-count-text'>{renderTotal()}</div>
					</div>
	
			) : (
				''
			)}</>
	)

	const renderCloseButton = () => (
			<RiShoppingBagLine
				color='#292B83'
				className={`${visibility} shopping-cart `}
			/>
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
		</div>
	)
}

export default CartNav

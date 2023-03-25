import React from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'



const ShoppingCart = ({ visibility, cartTotal, cart }) => 
{
	
	const renderTotal = () => {
		return (<>{cartTotal}</>)
	}
	return  (
	<>
		<div className={`${visibility} shopping-cart `}>
			<RiShoppingBagLine className={`${visibility}`} />
		</div>
		<div className={`${visibility} cart-count`}>
			<div className='cart-count-text'>{ renderTotal()}</div>
		</div>
	</>
) }

export default ShoppingCart
import React from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'
import commerce from '../lib/commerce'


const ShoppingCart = ({ visibility, cartTotal }) => (
	<>
		<div className={`${visibility} shopping-cart `}>
			<RiShoppingBagLine className={`${visibility}`} />
		</div>
		<div className={`${visibility} cart-count`}>
			<div className='cart-count-text'>{cartTotal}</div>
		</div>
	</>
)

export default ShoppingCart
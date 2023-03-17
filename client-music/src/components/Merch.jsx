import React from "react";
import { useState, useEffect, useContext } from "react";
import './Fader.scss'
import { Link } from "react-router-dom";
import ContainedButtons from "./ContainedButtons";
import { Featured, CartContext} from "./Featured"
import commerce from '../lib/commerce'




const Fader = ({visibility, song, setSearchParams, cartQtyObj, merch, cartSum, active, setActive, setQuantity, size, image, updateSize, activeMerch, incrementQuantity, decrementQuantity}) => {
	// useEffect(() => {
	// 	setSearchParams(song.id)
	// }, [])
	const [currentMerch, setCurrentMerch] = useState(cartQtyObj[0])
	const { total, setTotal } = useContext(CartContext)

	useEffect(cartSum)
	
	const updateFeature = () => {
		if (active >= merch.length - 1) {
			setActive(0)
		} else {
			const temp = active
			setActive(temp + 1)
			setQuantity(cartQtyObj[active][size])
		}
	}

	const decrQty = () => {
		decrementQuantity()
		console.log('decr')
	}
	const incrQty = () => {
		incrementQuantity()
	}

	return (
		<div className={`merch ${visibility}`}>
			
			<img
				onClick={updateFeature}
				className={`merch-image`}
				src={image}
				alt='merch'></img>
			<div className = 'merch-price'>${activeMerch.price}</div>
			<div><span>{total}</span>
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
					onClick={incrementQuantity}
					className={'merch-button increment-button increment-button-right'}>
					<span>+</span>
				</button>
			</div>
		</div>
	)
}

export default Fader
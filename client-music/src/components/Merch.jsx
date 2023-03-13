import React from "react";
import { useState, useEffec } from "react";
import './Fader.scss'
import { Link } from "react-router-dom";
import ContainedButtons from "./ContainedButtons";

import merch1 from '../assets/merch.png'
import merch2 from '../assets/merch2.png'



const Fader = ({visibility, song, setSearchParams}) => {
	// useEffect(() => {
	// 	setSearchParams(song.id)
	// }, [])

	const [quantity, setQuantity] = useState(0)
	const [active, setActive] = useState(0)

	const incrementQuantity = function() {
		let temp = quantity + 1
		setQuantity(temp)
	}
	const decrementQuantity = function() {
		let temp = quantity > 0 ? quantity - 1 : 0
		setQuantity(temp)
	}
	const merch = [
		{ img: merch1, link: 'http://www.google.com/' },
		{ img: merch2, link: 'http://www.google.com/' },
	]
	let activeMerch = merch[active]
	let image = activeMerch.img
	
	
	const updateFeature = () => {
		if (active >= merch.length - 1) {
			setActive(0)
		} else {
			const temp = active
			setActive(temp + 1)
		}
	}
	return (
		<div className={`merch ${visibility}`}>
			<img
				onClick={updateFeature}
				className={`merch-image`}
				src={image}
				alt='merch'></img>
			<div>
				<button onClick={decrementQuantity} className={'increment_buttons'}>
					-
				</button>
				<button
					className='merch-button'
					onClick={() =>
						window.open('https://trevorlomba.github.io/portfolio/', '_blank')
					}>
					<span>{quantity} in cart</span>
				</button>
				<button onClick={incrementQuantity} className={'increment_buttons'}>
					+
				</button>
			</div>
		</div>
	)
}

export default Fader
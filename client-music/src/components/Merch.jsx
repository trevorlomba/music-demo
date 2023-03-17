import React from "react";
import { useState, useEffect, useContext } from "react";
import './Fader.scss'
import { Link } from "react-router-dom";
import ContainedButtons from "./ContainedButtons";
import { Featured, CartContext} from "./Featured"
import commerce from '../lib/commerce'
import ProductItem from "./ProductItem";




const Fader = ({
	visibility,
	song,
	setSearchParams,
	cartQtyObj,
	merch,
	cartSum,
	active,
	setActive,
	setQuantity,
	size,
	updateSize,
	activeMerch,
	incrementQuantity,
	decrementQuantity,
	products,
	cart,
	fetchProducts,
	handleUpdateCartQty,
	item,
	onAddToCart
}) => {
	// useEffect(() => {
	// 	setSearchParams(song.id)
	// }, [])
	const [currentMerch, setCurrentMerch] = useState(cartQtyObj[0])
	const { total, setTotal } = useContext(CartContext)

	useEffect(cartSum)
	useEffect(()=>{console.log(cart)})

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
	let image
	let price

	// useEffect(()=> {
	// 	handleUpdateProduct()
	// }, [products])

	const [loadProduct, setLoadProduct] = useState(false)

	useEffect(() => {
		const onPageLoad = () => {
			setLoadProduct(true)
		}
		// Check if the page has already loaded
		if (document.readyState === 'complete') {
			onPageLoad()
		} else {
			window.addEventListener('load', onPageLoad)
			// Remove the event listener when component unmounts
			return () => window.removeEventListener('load', onPageLoad)
		}
	}, [])

	const renderProduct = () => {
		if (!products) {
			return null
		}

		return (
			<div className='products' id='products'>
				<>
					<ProductItem
						// key={products[active].id}
						product={products[active]}
						updateFeature={updateFeature}
						size={size}
						updateSize={updateSize}
						decrementQuantity={decrementQuantity}
						incrementQuantity={incrementQuantity}
						cartQtyObj={cartQtyObj}
						active={active}
						handleUpdateCartQty={handleUpdateCartQty}
						item={item}
						cart={cart}
						onAddToCart={onAddToCart}
					/>{' '}
				</>
			</div>
		)
	}

	return (
		<div className={`merch ${visibility}`}>
			<>{renderProduct()}</>
		</div>
	)
}

export default Fader
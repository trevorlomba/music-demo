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
	onAddToCart, 
	lagCorrect,
	setLagCorrect,
	color,
	setColor,
	updateColor,
	feature
}) => {
	// useEffect(() => {
	// 	setSearchParams(song.id)
	// }, [])
	const [currentMerch, setCurrentMerch] = useState(cartQtyObj[0])
	const { total, setTotal } = useContext(CartContext)
	// useEffect (() => setActive(0), [])
	
	const [activeProduct, setActiveProduct] = useState(products[active])
	
	useEffect(() => {
		setActiveProduct(products[active])
		if (cart.line_items &&
			cart.total_unique_items &&
			cart.line_items.find(
				({ product_id }) => product_id === products[active].id
			) > 0)
			setItemQty( cart.line_items.find(({ id }) => id === activeProduct.id)) }, [active, products])
	
	
	// useEffect(cartSum)
	// useEffect(()=>{console.log(products[active].id)})
	const [itemQty, setItemQty] = useState(0)

	const countQuantity = () => {
		console.log(active)
		const temp =
			cart.line_items &&
			cart.total_unique_items > 0 &&
			cart.line_items.find(
				({ product_id }) => product_id === products[active].id
			).quantity
				? cart.line_items.find(
						({ product_id }) => product_id === products[active].id
				  ).quantity
				: 0
		// console.log(temp)
		// console.log(products && products[active] ? products[active].id : '')
		// console.log(
		// 	cart.line_items &&
		// 		cart.total_unique_items > 0
		// 		? cart.line_items.find(
		// 			({ product_id }) => product_id === products[active].id
		// 		) : ''
		// )
		setItemQty(temp)
	}

	
	const item = cart.lineItems
	
	// useEffect(() => 
	// {
	// 	if (products.length) {
	// 		setActiveProduct(products[active])}})
			
	// useEffect(() => {
	// 	if (active) {
	// 		countQuantity()
	// 	}
	// }
	// )
	const handleUpdateFeature = () => {
		updateFeature()
		setTimeout(() => countQuantity(), 1000)
	}
	function updateFeature() {
		if (active >= products.length - 1) {
					// countQuantity()
					// console.log(itemQty)
					setActive(0);
					// console.log(itemQty)
				} else {
					// console.log(itemQty)
					const temp = active;
					setActive(temp + 1);
					// console.log(itemQty)
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
				
	
	const renderProductItem = () => {
		if (!products) {
			return null
		}
		return (
			<ProductItem
				// key={products[active].id}
				product={activeProduct}
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
				itemQty={itemQty}
				setItemQty={setItemQty}
				countQuantity={countQuantity}
				handleUpdateFeature={handleUpdateFeature}
				products={products}
				lagCorrect={lagCorrect}
				setLagCorrect={setLagCorrect}
				renderable={renderable}
				color={color}
				setColor={setColor}
				updateColor={updateColor}
				feature={feature}
			/>
		)
	}

	const renderable = products[active] === null || cart.line_items === null
	
	return (
		<div className={`merch ${visibility}`}>
			{renderable  ? 
			'loading' : renderProductItem()
		}
		</div>
	)
}

export default Fader
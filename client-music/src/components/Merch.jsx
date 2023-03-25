import React from "react";
import { useState, useEffect, useContext } from "react";
import './Fader.scss'
import { Link } from "react-router-dom";
import ContainedButtons from "./ContainedButtons";
import { Featured, CartContext} from "./Featured"
import commerce from '../lib/commerce'
import ProductItem from "./ProductItem";




const Merch = ({
	visibility,
	cartQtyObj,
	active,
	setActive,
	size,
	updateSize,
	incrementQuantity,
	decrementQuantity,
	products,
	cart,
	handleUpdateCartQty,
	onAddToCart, 
	lagCorrect,
	setLagCorrect,
	color,
	setColor,
	updateColor,
	feature
}) => {

	const [currentMerch, setCurrentMerch] = useState(cartQtyObj[0])
	const { total, setTotal } = useContext(CartContext)
	
	const [activeProduct, setActiveProduct] = useState(products[active])
	
	useEffect(() => {
		setActiveProduct(products[active])
		if (cart.line_items &&
			cart.total_unique_items &&
			cart.line_items.find(
				({ product_id }) => product_id === products[active].id
			) > 0)
			setItemQty( cart.line_items.find(({ id }) => id === activeProduct.id)) }, [active, products])
	
	
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
		setItemQty(temp)
	}

	
	const item = cart.lineItems
	
	const handleUpdateFeature = () => {
		updateFeature()
		setTimeout(() => countQuantity(), 1000)
	}
	function updateFeature() {
		if (active >= products.length - 1) {
					setActive(0);
				} else {
					const temp = active;
					setActive(temp + 1);
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
				product={activeProduct}
				size={size}
				updateSize={updateSize}
				active={active}
				item={item}
				cart={cart}
				onAddToCart={onAddToCart}
				itemQty={itemQty}
				setItemQty={setItemQty}
				handleUpdateFeature={handleUpdateFeature}
				products={products}
				lagCorrect={lagCorrect}
				setLagCorrect={setLagCorrect}
				renderable={renderable}
				color={color}
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

export default Merch
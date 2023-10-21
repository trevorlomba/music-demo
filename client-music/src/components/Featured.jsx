import React, { useEffect, useState, createContext } from 'react'
import './Featured.scss'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import {
	NavLink,
	useSearchParams,
	useLocation,
} from 'react-router-dom'
// import { useHistory, useLocation } from 'react-router-dom'
import { TbPlayerSkipBack, TbPlayerSkipForward } from 'react-icons/tb'
import merch1 from '../assets/merch.png'
import merch2 from '../assets/merch2.png'
import MainSite from './MainSite Components/MainSite'

import MusicComponent from '../components/MusicComponent'

// import featuredImage from '../assets/background.gif'
// import logoImage from '../assets/logo.png'

import Merch from './Merch'
import Fader from './Fader'
import ScrollPrompts from './ScrollPrompts'
import FeaturedLinks from './FeaturedLinks'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import songs from '../songs'
import axios from 'axios'

import {
	BsInputCursor,
} from 'react-icons/bs'
import {
	RiLinksFill,
} from 'react-icons/ri'
import { IoShirtOutline } from 'react-icons/io5'
import commerce from '../lib/commerce'
import CartNav from './CartNav'
import Checkout from './Checkout'
import Confirmation from './Confirmation'
import { useSwipeable } from 'react-swipeable'

const Logo = React.lazy(() => import('./Logo'))

export const CartContext = createContext()

export const Featured = ({
	playing,
	setPlaying,
	song,
	setSong,
	vocalVolume,
	setVocalVolume,
	songId,
	setSongId
}) => {
	// Initialize state variables
	const [visible, setVisible] = useState(true)
	const [feature, setFeature] = useState(0)
	const [cartTotal, setCartTotal] = useState(0)
	const [lagCorrect, setLagCorrect] = useState(0)
	const [searchParams, setSearchParams] = useSearchParams()
	const [active, setActive] = useState(0)
	const current = useLocation()
	const [path, setPath] = useState('/')

		// Navigate to the new path when the state changes
	const navigate = useNavigate()
	
	useEffect(() => {
			navigate(`/${featureOrder[feature]}`)
		}, [feature, navigate])

	// Update the path based on some state
	function handleUpdateFeature(newState) {
		const newPath = feature >= featureOrder.length - 1 ? 0 : feature + 1
		setFeature(newPath)
	}

	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	

	// Get featured image and logo images from song data
	let featuredImage = song?.data?.background
	let logoImage = song?.data.logo
	let logoImage2 = song?.data.logo2

	// Log song data (commented out for production)
	// console.log(song)

	useEffect(() => {
		const songId = searchParams.get('song')
		if (songId !== null) {
			setSong(songId)
		}
	}, [])

	
	useEffect(() => {
		if (song) {
			setSearchParams({ song: song.data.path })
		} else {
			setSearchParams({ song: songs[0].data.path })
		}
		// console.log(song)
	}, [song, feature])

	useEffect(() => {
		// setFeature(featureOrder.find(feature => feature === current))
	}, [feature])


	const prevSong = (event) => {
		if (event) {
			event.preventDefault()
		}

		const prevId = song?.id - 1

		if (prevId < 0) {
			const lastId = songs.length - 1
			setSong(lastId)
			setSearchParams({ song: songs[lastId].data.path })
			setSongId(lastId)
		} else {
			setSong(prevId)
			setSearchParams({ song: songs[prevId].data.path })
			setSongId(prevId)
		}
	}

	const nextSong = (event) => {
		if (event) {
			event.preventDefault()
		}

		const nextId = song?.id + 1
		console.log('nextId: ' + nextId)

		if (nextId >= songs.length) {
			console.log('nextId is greater than songs.length')
			setSong(0)
			setSearchParams({ song: songs[0].data.path })
			setSongId(0)
		} else {
			console.log('nextId is less than songs.length')
			setSong(nextId)
			console.log(songs[nextId])
			console.log(song)
			setSearchParams({ song: songs[nextId].data.path })
			setSongId (nextId)
		}
	}


const toggleVisible = () => {
	setVisible((prevState) => !prevState)
}

const togglePlaying = () => {
	setPlaying((prevState) => !prevState)
}

const visibility = visible ? 'visible' : 'invisible'

const activeClassName = 'nav-active'

const featureOrder = ['featured', 'merch']

let next = featureOrder[feature]

let tempFeat 
// useEffect(() => {

//  tempFeat = featureOrder.findIndex(name => '/'+name === current.pathname) ? featureOrder.findIndex(name => '/'+name === current.pathname) : 0 
//  console.log(tempFeat)

// // 	console.log(feature)
// // 	// console.log(featureOrder.findIndex(name => '/'+name === current.pathname))
// }, [feature])

// useEffect(() => {
//  	tempFeat = featureOrder.findIndex((name) => '/' + name === current.pathname)
// 		? featureOrder.findIndex((name) => '/' + name === current.pathname)
// 		: 0 

// 	setFeature(tempFeat)
// 	console.log(feature)
// 	// console.log(featureOrder.findIndex(name => '/'+name === current.pathname))
// }, [])


async function fetchVideo() {
	const video = await axios.get(song?.video)
	return video
}

const updateFeature = () => {
	// console.log(feature)
	// console.log(featureOrder.length - 1)
	const temp = feature >= featureOrder.length - 1 ? 0 : feature + 1
	// console.log(temp)
	setFeature(temp)
	// next = featureOrder[feature]
	// navigate(feature)
}


const [isVideoLoaded, setIsVideoLoaded] = React.useState(false)

const onLoadedData = () => {
	setIsVideoLoaded(true)
}


	const CQO = [
		{
			_id: 1,
			price: 49.99,
			sizes: ['small', 'medium', 'large'],
			img: merch1,
			title: 'sweat',
			description: 'sweat in this, liberals',
			small: 0,
			medium: 0,
			large: 0,
		},
		{
			_id: 1,
			price: 19.99,
			sizes: ['small', 'medium', 'large'],
			img: merch2,
			title: 'sweat',
			description: 'sweat in this, liberals',
			small: 0,
			medium: 0,
			large: 0,
		},
	]
	const [cartQtyObj, setCartQtyObj] = useState(CQO)

	const merch = [
		{ img: merch1, link: 'http://www.google.com/' },
		{ img: merch2, link: 'http://www.google.com/' },
	]

	const [size, setSize] = useState(0)
	const [color, setColor] = useState(0)
	const [quantity, setQuantity] = useState(0)

	const incrementQuantity = function (qty) {
		let temp = cartTotal + qty
		setCartTotal(temp)
	}

	const decrementQuantity = function () {
		let temp = cartQtyObj[active][size] > 0 ? cartQtyObj[active][size] - 1 : 0
		cartQtyObj[active][size] = temp
		setQuantity(temp)
	}

	let activeMerch = cartQtyObj[active]
	let image = activeMerch.img

	const updateSize = (size) => {
		setSize(size)
	}
	const updateColor = (size) => {
		setColor(size)
	}

	// let cartSum = () => {
	// 	let temp = 0
	// 	for (let i = 0; i < cartQtyObj.length; i++) {
	// 		temp += cartQtyObj[i].small
	// 		temp += cartQtyObj[i].medium
	// 		temp += cartQtyObj[i].large
	// 	}
	// 	setCartTotal(temp)
	// }

	// useEffect(cartSum)

	const [total, setTotal] = useState(0)

	/**
	 * Fetch products data from Chec and stores in the products data object.
	 * https://commercejs.com/docs/sdk/products
	 */
	const fetchProducts = () => {
		commerce.products
			.list()
			.then((products) => {
				setProducts(products.data)
			})
			.catch((error) => {
				console.log('There was an error fetching the products', error)
			})
	}

	useEffect(() => {
		fetchProducts()
		fetchCart()
	}, [])

	const [cart, setCart] = useState({})

	/**
	 * Retrieve the current cart or create one if one does not exist
	 * https://commercejs.com/docs/sdk/cart
	 */
	const fetchCart = () => {
		commerce.cart
			.retrieve()
			.then((cart) => {
				setCart(cart)
			})
			.catch((error) => {
				console.log('There was an error fetching the cart', error)
			})
	}

	/**
	 * Adds a product to the current cart in session
	 * https://commercejs.com/docs/sdk/cart/#add-to-cart
	 *
	 * @param {string} productId The ID of the product being added
	 * @param {number} quantity The quantity of the product being added
	 */
	const handleAddToCart = (productId, quantity, variantObject) => {
		commerce.cart
			.add(productId, quantity, variantObject)
			.then((item) => {
				setCart(item.cart)
			})
			.then(() => {
				setLagCorrect(0)
				// console.log(lagCorrect)
			})
			.catch((error) => {
				// incrementQuantity(-quantity)
				console.error('There was an error adding the item to the cart', error)
			})
	}

	/**
	 * Updates line_items in cart
	 * https://commercejs.com/docs/sdk/cart/#update-cart
	 *
	 * @param {string} lineItemId ID of the cart line item being updated
	 * @param {number} newQuantity New line item quantity to update
	 */
	const handleUpdateCartQty = (lineItemId, quantity) => {
		commerce.cart
			.update(lineItemId, { quantity })
			.then((resp) => {
				setCart(resp.cart)
			})
			.catch((error) => {
				console.log('There was an error updating the cart items', error)
			})
	}

	/**
	 * Removes line item from cart
	 * https://commercejs.com/docs/sdk/cart/#remove-from-cart
	 *
	 * @param {string} lineItemId ID of the line item being removed
	 */
	const handleRemoveFromCart = (lineItemId) => {
		commerce.cart
			.remove(lineItemId)
			.then((resp) => {
				setCart(resp.cart)
			})
			.catch((error) => {
				console.error(
					'There was an error removing the item from the cart',
					error
				)
			})
	}

	/**
	 * Empties cart contents
	 * https://commercejs.com/docs/sdk/cart/#remove-from-cart
	 */
	const handleEmptyCart = () => {
		commerce.cart
			.empty()
			.then((resp) => {
				setCart(resp.cart)
			})
			.catch((error) => {
				console.error('There was an error emptying the cart', error)
			})
	}

	/**
	 * Refreshes to a new cart
	 * https://commercejs.com/docs/sdk/cart#refresh-cart
	 */
	const refreshCart = () => {
		commerce.cart
			.refresh()
			.then((newCart) => {
				this.setState({
					cart: newCart,
				})
			})
			.catch((error) => {
				console.log('There was an error refreshing your cart', error)
			})
	}

	/**
	 * Captures the checkout
	 * https://commercejs.com/docs/sdk/checkout#capture-order
	 *
	 * @param {string} checkoutTokenId The ID of the checkout token
	 * @param {object} newOrder The new order object data
	 */
	const handleCaptureCheckout = (checkoutTokenId, newOrder) => {
		commerce.checkout
			.capture(checkoutTokenId, newOrder)
			.then((order) => {
				// Save the order into state
				this.setState({
					order,
				})
				// Clear the cart
				this.refreshCart()
				// Send the user to the receipt
				this.props.history.push('/confirmation')
				// Store the order in session storage so we can show it again if the
				// user refreshes the page!
				window.sessionStorage.setItem('order_receipt', JSON.stringify(order))
			})
			.catch((error) => {
				console.log('There was an error confirming your order', error)
			})
	}

	const [merchant, setMerchant] = useState({})
	const [products, setProducts] = useState([])
	const [isCartVisible, setIsCartVisible] = useState(false)
	const [order, setOrder] = useState({})

	// useEffect(() => console.log(products), [products])
	useEffect(() => {
		setCartTotal(cart.total_items)
		// console.log(cartTotal)
	}, [cart])

	useEffect(() => {
		setColor(0)
		updateSize(0)
	}, [active])

	React.useEffect(() => {
		documentRef(document)
		// Clean up swipeable event listeners
		return () => documentRef({})
	})

	const { ref: documentRef } = useSwipeable({
		onSwipedLeft: ({ dir, event }) => {
			prevSong()
			// console.log('swipedLeft')
		},
		onSwipedRight: ({ dir, event }) => {
			nextSong()
			// console.log('swipedLeft')
		},
		preventDefaultTouchmoveEvent: true,
	})

	return (
		<div>
			{/* <ProductsList products={products} onAddToCart={handleAddToCart} /> */}
			{/* {feature} */}
			<CartNav
				cart={cart}
				onUpdateCartQty={handleUpdateCartQty}
				onRemoveFromCart={handleRemoveFromCart}
				onEmptyCart={handleEmptyCart}
				products={products}
				visibility={visibility}
				cartTotal={cartTotal}
			/>
			<CartContext.Provider value={{ cartQtyObj, setCartQtyObj }}>
				{/* <ShoppingCart
					className=''
					visibility={visibility}
					cartTotal={cartTotal}
				/> */}
				<div
					className='flex-container'
					style={
						{
							// backgroundImage: `url(${featuredImage}`,
						}
					}>
					<ScrollPrompts
						visibility={visibility}
						prevSong={prevSong}
						nextSong={nextSong}
						activeClassName={activeClassName}
						next={next}
						updateFeature={updateFeature}
						feature={feature}
						order={featureOrder}
					/>
					<div className='flex-item flex-item-1'>
						<Logo
							className=''
							visible={visible}
							visibility={visibility}
							toggleVisible={toggleVisible}
							logoImage={logoImage}
							logoImage2={logoImage2}
							activeClassName={activeClassName}
							song={song}
						/>
					</div>
					<div className='flex-item flex-item-2'>
						<Routes>
							{/* <Redirect to="/featured" /> */}
							<Route
								path='/checkout'
								element={
									<Checkout
										cart={cart}
										onUpdateCartQty={handleUpdateCartQty}
										onRemoveFromCart={handleRemoveFromCart}
										onEmptyCart={handleEmptyCart}
										onCaptureCheckout={handleCaptureCheckout}
									/>
								}
							/>

							{/* refactored from commerceJS documentation */}
							<Route
								path='/confirmation'
								element={
									this?.state?.order ? (
										<Confirmation order={order} />
									) : (
										<Navigate to='/featured' />
									)
								}
							/>

							{/* list all products */}
							{/* <Route
								path='/productsList'
								element={
									<ProductsList
										products={products}
										onAddToCart={handleAddToCart}
									/>
								}
							/> */}
							<Route
								path='/'
								element={<FeaturedLinks song={song} visibility={visibility} handleUpdateFeature={handleUpdateFeature} />}
							/>
							<Route
								path='/*'
								element={<FeaturedLinks song={song} visibility={visibility} handleUpdateFeature={handleUpdateFeature} />}
							/>
							<Route
								path='/merch'
								element={
									<Merch
										visibility={visibility}
										cartQtyObj={cartQtyObj}
										setCartTotal={setCartTotal}
										active={active}
										setActive={setActive}
										size={size}
										image={image}
										updateSize={updateSize}
										incrementQuantity={incrementQuantity}
										decrementQuantity={decrementQuantity}
										products={products}
										cart={cart}
										handleUpdateCartQty={handleUpdateCartQty}
										onAddToCart={handleAddToCart}
										cartTotal={cartTotal}
										lagCorrect={lagCorrect}
										setLagCorrect={setLagCorrect}
										color={color}
										setColor={setColor}
										updateColor={updateColor}
										feature={feature}
									/>
								}
							/>
							<Route
								path='/featured'
								element={
									<FeaturedLinks
										song={song}
										visibility={visibility}
										setSearchParams={setSearchParams}
									/>
								}
							/>
							<Route
								path='/mix'
								element={
									<Fader
										songVolume={vocalVolume}
										setVocalVolume={setVocalVolume}
										visibility={visibility}
									/>
								}
							/>
						</Routes>

						{/* {song.data.element[feature]} */}
					</div>
					<div className='flex-item flex-item-3'>
						<div className={`playButton ${visibility}`} onClick={togglePlaying}>
							<div
								className={`flex-item flex-item-3 ${
									playing ? 'pause' : 'play'
								}`}>
								{!playing ? <AiFillPlayCircle /> : <AiFillPauseCircle />}
							</div>
						</div>
					</div>
				</div>
				<video
					key={song?.video}
					style={{
						backgroundImage: `url(${featuredImage}`,
					}}
					autoPlay
					loop
					muted
					id='video'
					onLoadedData={onLoadedData}>
					<source src={song?.video} type='video/mp4' />
				</video>
					{current.pathname === '/merch' ? (
				<NavLink
					to={'/featured' + '?song=' + song?.id}
					className={({ isActive }) =>
						isActive ? activeClassName : undefined
					}>
						<IoShirtOutline
							onClick={handleUpdateFeature}
							className={`scroll-prompt scroll-prompt-right ${visibility}`}
						/> 
						</NavLink>
						) : (
				<NavLink
					to={'/merch' + '?song=' + song?.id}
					className={({ isActive }) =>
						isActive ? activeClassName : undefined
					}>
						<RiLinksFill
							onClick={handleUpdateFeature}
							className={`scroll-prompt scroll-prompt-right ${visibility}`}
						/></NavLink>
					)}
				<>
					<NavLink
						// to={
						// 	featureOrder[feature] + 1
						// 		? featureOrder[feature]
						// 		: featureOrder[0]
						// }
						to={featureOrder[feature] + '?song=' + song?.data.path}
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}>
						<TbPlayerSkipBack
							onClick={prevSong}
							className={`scroll-prompt scroll-prompt-top ${visibility}`}
						/>
					</NavLink>
					<NavLink
						// to={featureOrder[feature]}
						to={featureOrder[feature] + '?song=' + song?.data.path}
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}>
						<TbPlayerSkipForward
							onClick={nextSong}
							className={`scroll-prompt scroll-prompt-bottom ${visibility}`}
						/>
					</NavLink>
					{/* {'feature'}
				{feature}
				{' song'}
				{song.id}
				{' songs'}
				{songs.length}
				{songs.map((song) => {
					return song.title + ', '
				})}
				{current.pathname} */}
				</>
			</CartContext.Provider>
			<MusicComponent 
			setSong={setSong}
			setSongId={setSongId}
			songId={songId}
		/>

		</div>
	)
}

import React, { useEffect, useState, lazy, createContext } from 'react'
import './Featured.scss'
import { Routes, Route, Switch } from 'react-router-dom'
import {
	BrowserRouter,
	NavLink,
	Redirect,
	useSearchParams,
	useParams,
	useLocation,
} from 'react-router-dom'
// import { useHistory, useLocation } from 'react-router-dom'
import { TbPlayerSkipBack, TbPlayerSkipForward } from 'react-icons/tb'
import merch1 from '../assets/merch.png'
import merch2 from '../assets/merch2.png'

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
	BsChevronDoubleDown,
	BsChevronDoubleUp,
	BsArrowLeftRight,
	BsInputCursor,
} from 'react-icons/bs'
import {
	RiLinksFill,
	RiShoppingBag2Fill,
	RiShoppingBagFill,
} from 'react-icons/ri'
import { IoShirtOutline } from 'react-icons/io5'
import ShoppingCart from './ShoppingCart'
import commerce from '../lib/commerce'
import ProductsList from './ProductsList.jsx'
import CartNav from './CartNav'
import Checkout from './Checkout'
import Confirmation from './Confirmation'
import Cart from './Cart'

const Logo = React.lazy(() => import('./Logo'))

export const CartContext = createContext()

export const Featured = ({
	artistName,
	playing,
	setPlaying,
	song,
	setSong,
	vocalVolume,
	setVocalVolume,
}) => {
	let featuredImage = song.data.background
	// let FeaturedImage = React.lazy(() => import('./FeaturedImage'))

	let logoImage = song.data.logo
	let logoImage2 = song.data.logo2
	const [visible, setVisible] = useState(true)
	const [feature, setFeature] = useState(0)
	const [cartTotal, setCartTotal] = useState(0)
	const [lagCorrect, setLagCorrect] = useState(0)

	// console.log(song)
	let [searchParams, setSearchParams] = useSearchParams()
	const [active, setActive] = useState(0)

	useEffect(() => {
		let songTemp = searchParams.get('song')
		if (songTemp) setSong(searchParams.get('song'))
	}, [])

	useEffect(() => {
		setSearchParams({ song: song.id })

		console.log(song)
	}, [song, feature])


	const prevSong = (event) => {
		event.preventDefault()
		// console.log(song.id)
		// console.log(((song.id - 1) % songs.length) - 1)
		// setSong((song.id - 1) % songs.length-1)
		if (song.id < 1) {
			console.log(song.id)
			let temp = songs.length - 1
			console.log(temp)
			setSong(temp)
			setSearchParams({ song: temp })

			// setSong(newSong)
		} else {
			// setSong((prevState) => prevState - 1)
			let temp = song.id
			// console.log(temp)
			setSong(temp - 1)
			setSearchParams({ song: temp })
		}
		// console.log(songs.length)
		// console.log(song.id)
		// // console.log(songs.length - song.id)
		// let temp = song.id-1
		// console.log(temp)

		// const newSong = ((song.id--) % songs.length)
		// console.log((songs[song.id % songs.length].id))
		// console.log(newSong)
		// setSong(newSong)
	}
	const nextSong = (event) => {
		event.preventDefault()

		// console.log(songs.length)
		// console.log((song.id + 1) % songs.length)
		// setSong((prevState) => (prevState) % songs.length)

		// if (song.id === songs.length - 1) {
		// 	const newSong = 0
		// 	setSong(newSong)
		// } else {
		// 	setSong((prevState) => prevState + 1)
		// }
		// 	setSearchParams({ song: song.id })

		if (song.id === songs.length - 1) {
			// console.log(song.id)
			let temp = 0
			console.log(temp)
			setSong(temp)
			setSearchParams({ song: temp })
			// setSong(newSong)
		} else {
			// setSong((prevState) => prevState - 1)
			let temp = song.id + 1
			// console.log(temp)
			console.log(temp, song.id, songs.length, song.id === songs.length)
			setSong(temp)
			setSearchParams({ song: temp })
			// console.log(song)
		}
	}
	const toggleVisible = async () => {
		setVisible((prevState) => !prevState)
		// if (!visible) {
		// 	setFeature(1)
		// }
	}
	const togglePlaying = () => {
		setPlaying((prevState) => !prevState)
	}
	const visibility = visible ? 'visible' : 'invisible'
	let activeClassName = 'nav-active'
	const featureOrder = ['merch', 'featured']
	let next = featureOrder[feature]
	// let current = featureOrder[feature]

	async function fetchVideo() {
		const video = await axios.get(song.video)
		return video
	}

	const updateFeature = () => {
		if (feature >= featureOrder.length - 1) {
			setFeature(0)
		} else {
			const temp = feature
			setFeature(temp + 1)
		}
	}

	let current = useLocation()

	const [isVideoLoaded, setIsVideoLoaded] = React.useState(false)
	// const src = getVideoSrc(window.innerWidth)
	const onLoadedData = () => {
		console.log('data loaded')
		setIsVideoLoaded(true)
	}

	// const history = useHistory()
	// const location = useLocation()

	// const reload = () => {
	// 	history.push(location.pathname)
	// }

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
	const handleAddToCart = (productId, quantity) => {
		commerce.cart
			.add(productId, quantity)
			.then((item) => {
				setCart(item.cart)
			})
			.then(() => {
				setLagCorrect(0)
				console.log(lagCorrect)
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
				// countQuantity()
				console.log(cartTotal)
			
	}, [cart])

	// useEffect(() => {
	// 	setCartTotal(cart.total_items)
	// }, [cart.total_items])

	return (
		<div>
			{/* <ProductsList products={products} onAddToCart={handleAddToCart} /> */}
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

					{/* <div className={`song-title ${visibility}`}>{song.title + ' - ' + song.artist}</div> */}
					<div className='flex-item flex-item-2'>
						<Routes>
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
							<Route
								path='/confirmation'
								exact
								render={(props) => {
									if (!this.state.order) {
										return props.history.push('/')
									}
									return <Confirmation {...props} order={order} />
								}}
							/>

							<Route
								path='/productsList'
								element={
									<ProductsList
										products={products}
										onAddToCart={handleAddToCart}
									/>
								}
							/>
							<Route
								path='/'
								element={<FeaturedLinks song={song} visibility={visibility} />}
							/>
							<Route
								path='/*'
								element={<FeaturedLinks song={song} visibility={visibility} />}
							/>
							<Route
								path='/merch'
								element={
									<Merch
										song={song}
										visibility={visibility}
										setSearchParams={setSearchParams}
										cartQtyObj={cartQtyObj}
										merch={merch}
										setCartTotal={setCartTotal}
										// cartSum={cartSum}
										active={active}
										setActive={setActive}
										setQuantity={setQuantity}
										size={size}
										image={image}
										updateSize={updateSize}
										activeMerch={activeMerch}
										incrementQuantity={incrementQuantity}
										decrementQuantity={decrementQuantity}
										products={products}
										cart={cart}
										handleUpdateCartQty={handleUpdateCartQty}
										onAddToCart={handleAddToCart}
										cartTotal={cartTotal}
										lagCorrect={lagCorrect}
										setLagCorrect={setLagCorrect}

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
					key={song.video}
					style={{
						backgroundImage: `url(${featuredImage}`,
					}}
					autoPlay
					loop
					muted
					id='video'
					onLoadedData={onLoadedData}>
					<source src={song.video} type='video/mp4' />
				</video>
				<NavLink
					to={next + '?song=' + song.id}
					className={({ isActive }) =>
						isActive ? activeClassName : undefined
					}>
					{current.pathname === '/merch' ? (
						<IoShirtOutline
							onClick={updateFeature}
							className={`scroll-prompt scroll-prompt-right ${visibility}`}
						/>
					) : next === '/mix' ? (
						<BsInputCursor
							onClick={updateFeature}
							className={`scroll-prompt scroll-prompt-right ${visibility}`}
						/>
					) : current === '/featured' ? (
						<RiLinksFill
							onClick={updateFeature}
							className={`scroll-prompt scroll-prompt-right ${visibility}`}
						/>
					) : (
						<RiLinksFill
							onClick={updateFeature}
							className={`scroll-prompt scroll-prompt-right ${visibility}`}
						/>
					)}
				</NavLink>
				<>
					<NavLink
						to={featureOrder[feature] + '?song=' + song.id}
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}>
						<TbPlayerSkipBack
							onClick={prevSong}
							className={`scroll-prompt scroll-prompt-top ${visibility}`}
						/>
					</NavLink>
					<NavLink
						to={featureOrder[feature] + '?song=' + song.id}
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
		</div>
	)
}

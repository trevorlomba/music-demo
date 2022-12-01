import React, { useEffect, useState } from 'react'
import './Featured.scss'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter, NavLink, Redirect, useSearchParams, useParams } from 'react-router-dom'
// import { useHistory, useLocation } from 'react-router-dom'
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb'




// import featuredImage from '../assets/background.gif'
// import logoImage from '../assets/logo.png'

import Merch from './Merch'
import Fader from './Fader'
import ScrollPrompts from './ScrollPrompts'
import FeaturedLinks from './FeaturedLinks'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import songs from '../songs'

import {
	BsChevronDoubleDown,
	BsChevronDoubleUp,
	BsArrowLeftRight,
	BsInputCursor,
} from 'react-icons/bs'
import { RiLinksFill } from 'react-icons/ri'
import { IoShirtOutline } from 'react-icons/io5'

const Logo = React.lazy(() => import('./Logo'))

const Featured = ({
	artistName,
	playing,
	setPlaying,
	song,
	setSong,
	vocalVolume,
	setVocalVolume,
}) => {
	let featuredImage =song.data.background
	// let FeaturedImage = React.lazy(() => import('./FeaturedImage'))

	let logoImage = song.data.logo
	let logoImage2 = song.data.logo2
	const [visible, setVisible] = useState(true)
	const [feature, setFeature] = useState(0)
	// console.log(song)
	let [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {
		let songTemp = searchParams.get('song')
		if (songTemp)
		setSong(searchParams.get('song'))
	}, [])

	useEffect(() => {
		setSearchParams({song: song.id})

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
					setSearchParams({song: temp})
					// setSong(newSong)
				} else {
			// setSong((prevState) => prevState - 1)
			let temp = song.id + 1
			// console.log(temp)
			console.log(temp, song.id, songs.length, song.id === songs.length)
			setSong(temp)
			setSearchParams({song: temp})
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
	const order = ['merch', 'featured']
	let next = order[feature]
	let current = order[feature]


	const updateFeature = () => {
		if (feature >= order.length-1) {
			setFeature(0)
		} else {
			const temp = feature
			setFeature(temp+1)
		}
	}

	// const history = useHistory()
	// const location = useLocation()

	// const reload = () => {
	// 	history.push(location.pathname)
	// }

	return (
		<div>
			<div
				className='flex-container'
				style={{
					backgroundImage: `url(${featuredImage}`,
				}}>
				<ScrollPrompts
					visibility={visibility}
					prevSong={prevSong}
					nextSong={nextSong}
					activeClassName={activeClassName}
					next={next}
					updateFeature={updateFeature}
					feature={feature}
					order={order}
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
					/>
				</div>
				<div className='flex-item flex-item-2'>
					<Routes>
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
						<Route path='/merch' element={<Merch visibility={visibility} />} />
					</Routes>

					{/* {song.data.element[feature]} */}
				</div>
				<div className='flex-item flex-item-3'>
					<div className={`playButton ${visibility}`} onClick={togglePlaying}>
						<div
							className={`flex-item flex-item-3 ${playing ? 'pause' : 'play'}`}>
							{!playing ? <AiFillPlayCircle /> : <AiFillPauseCircle />}
						</div>
					</div>
				</div>
			</div>
			<NavLink
				to={next + '?song=' + song.id}
				className={({ isActive }) => (isActive ? activeClassName : undefined)}>
				{next === 'merch' ? (
					<IoShirtOutline
						onClick={updateFeature}
						className={`scroll-prompt scroll-prompt-right ${visibility}`}
					/>
				) : next === 'mix' ? (
					<BsInputCursor
						onClick={updateFeature}
						className={`scroll-prompt scroll-prompt-right ${visibility}`}
					/>
				) : next === 'featured' ? (
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
					to={order[feature] + '?song=' + song.id}
					className={({ isActive }) =>
						isActive ? activeClassName : undefined
					}>
					<TbPlayerTrackPrev
						onClick={prevSong}
						className={`scroll-prompt scroll-prompt-top ${visibility}`}
					/>
				</NavLink>
				<NavLink
					to={order[feature] + '?song=' + song.id}
					className={({ isActive }) =>
						isActive ? activeClassName : undefined
					}>
					<TbPlayerTrackNext
						onClick={nextSong}
						className={`scroll-prompt scroll-prompt-bottom ${visibility}`}
					/>
				</NavLink>
				{'feature'}{feature}
				{' song'}{song.id}
				{' songs'}{songs.length}
			</>
		</div>
	)
}

export default Featured

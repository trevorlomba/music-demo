import React, { useEffect, useState } from 'react'
import './Featured.scss'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter, NavLink } from 'react-router-dom'


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

const FeaturedImage = React.lazy(() => import('./FeaturedImage'))
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
	let featuredImage = song.data.background
	let logoImage = song.data.logo
	let logoImage2 = song.data.logo2
	const [visible, setVisible] = useState(true)
	const [feature, setFeature] = useState(0)
	console.log(song)

	const prevSong = () => {
		if (song.id < 1) {
			const newSong = songs.length - 1
			setSong(newSong)
		} else {
			setSong((prevState) => prevState - 1)
		}
	}
	const nextSong = () => {
		if (song.id === songs.length - 1) {
			const newSong = 0
			setSong(newSong)
		} else {
			setSong((prevState) => prevState + 1)
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
	const order = ['', 'mix', 'merch']
	let next = order[feature]

	const updateFeature = () => {
		if (feature >= order.length-1) {
			setFeature(0)
		} else {
			const temp = feature
			setFeature(temp+1)
		}
	}

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
					<Route path='/'
						element={<FeaturedLinks song={song} visibility={visibility} />}
					/>
					<Route
					path='/*'
						element={<FeaturedLinks song={song} visibility={visibility} />}
					/>
					<Route
						path='/merch'
						element={<Merch song={song} visibility={visibility} />}
					/>
					<Route
						path='featured'
						element={<FeaturedLinks song={song} visibility={visibility} />}
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
			</div></div>
			<NavLink
				to={next}
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
				) : (
					<RiLinksFill
						onClick={updateFeature}
						className={`scroll-prompt scroll-prompt-right ${visibility}`}
					/>
				)}
			</NavLink>
		</div>
	)
}

export default Featured

import React from "react";
import {
	BsChevronDoubleDown,
	BsChevronDoubleUp,
	BsArrowLeftRight,
	BsInputCursor
} from 'react-icons/bs'
import {
	RiLinksFill
} from 'react-icons/ri'
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb'
import { IoShirtOutline } from 'react-icons/io5'
import { RiOrderPlayFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom'


const ScrollPrompts = ({
	activeClassName,
	next,
	prevSong,
	visibility,
	nextSong,
	updateFeature,
	feature,
	order
}) => {
	return (
		<>
			{/* <NavLink
				to={next}
				className={({ isActive }) => (isActive ? activeClassName : undefined)}>
				<TbPlayerTrackPrev
					onClick={prevSong}
					className={`scroll-prompt scroll-prompt-top ${visibility}`}
				/>
			</NavLink>
			<NavLink
				to={next}
				className={({ isActive }) => (isActive ? activeClassName : undefined)}>
				<TbPlayerTrackNext
					onClick={nextSong}
					className={`scroll-prompt scroll-prompt-bottom ${visibility}`}
				/>
			</NavLink> */}
		</>
	)
}

export default ScrollPrompts
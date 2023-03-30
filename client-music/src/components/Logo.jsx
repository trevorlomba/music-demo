import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Logo = ({
	visibility,
	visible,
	toggleVisible,
	logoImage,
	logoImage2,
	activeClassName,
	song,
}) => {
	const location = useLocation()
	return (
		<NavLink
			to={location + '?song=' + song?.id}
			className={({ isActive }) => (isActive ? activeClassName : undefined)}>
			<img
				className={`title ${visibility}`}
				onClick={toggleVisible}
				src={`${visible ? logoImage : logoImage2}`}
				alt='logo'
			/>
		</NavLink>
	)
}

export default Logo

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
		<div
			className={({ isActive }) => (isActive ? activeClassName : undefined)}>
			<img
				className={`title ${visibility}`}
				src={`${visible ? logoImage : logoImage2}`}
				alt='logo'
			/>
		</div>
	)
}

export default Logo

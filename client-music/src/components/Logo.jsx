import React from "react"
import { NavLink } from "react-router-dom"

const Logo = ({visibility, visible, toggleVisible, logoImage, logoImage2, activeClassName}) => {
    return (
			<NavLink
				to='merch'
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
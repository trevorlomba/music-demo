import React from "react"
import { NavLink } from "react-router-dom"

const Logo = ({visibility, visible, toggleVisible, logoImage, logoImage2, activeClassName}) => {
    return (
			<div
				to=''git
				className={({ isActive }) => (isActive ? activeClassName : undefined)}>
				<img
					className={`title ${visibility}`}
					onClick={toggleVisible}
					src={`${visible ? logoImage : logoImage2}`}
					alt='logo'
				/>
			</div>
		)
}

export default Logo
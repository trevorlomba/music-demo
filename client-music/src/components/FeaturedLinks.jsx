import { React, useEffect } from "react";
import {TiSocialInstagram} from 'react-icons/ti'
import links from './links.jsx'


const FeaturedLinks = ({song, visibility, setSearchParams}) => {
	// useEffect(()=> {
	// 	setSearchParams(song.id)
	// }, [setSearchParams, song.id])

	 const mappedLinks = song.data.featuredLinks.map((link, i) => (
				<tr
					onClick={() => {
						window.open(`${link.link}`, '_blank')
					}}>
					<td className={link.tag}>
						<span className='react-icon'>{link.img}</span>
						<span className='link-title'>{link.name}</span>
					</td>
				</tr>
		))
	return (
			<div className={`scroll-container ${visibility}`}>
				<div className='flex-item flex-item-links featured-links'>
					<table>
			<tbody>
						{mappedLinks}
						</tbody>
						</table>
					{/* {song.data.featuredLinks[0].link} */}
				</div>
			</div>
	)
}

export default FeaturedLinks
import { React } from "react";

const FeaturedLinks = ({song, visibility}) => {

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
		<div><div className='song-title'>{song.title + ' - ' + song.artist}</div>
				<div className='flex-item flex-item-links featured-links'>
					<table className="featured-links-table">
			<tbody>
						{mappedLinks}
						</tbody>
						</table>
				</div>
			</div></div>
	)
}

export default FeaturedLinks
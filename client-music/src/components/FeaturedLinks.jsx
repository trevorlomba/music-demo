import { React } from "react";
import { IoShirtOutline } from "react-icons/io5";

const FeaturedLinks = ({song, visibility, handleUpdateFeature}) => {

	 const mappedLinks = !visibility ? '' : song.data.featuredLinks.map((link, i) => (
				<tr key = {i}
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
{/* 							
							<tr
								onClick={handleUpdateFeature}>
								<td >
									<span className='react-icon'><IoShirtOutline/></span>
									<span className='link-title'>{'Buy Merch'}</span>
								</td>
							</tr> */}
						{mappedLinks}
						</tbody>
						</table>
				</div>
			</div></div>
	)
}

export default FeaturedLinks
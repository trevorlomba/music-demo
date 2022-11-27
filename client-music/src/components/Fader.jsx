import React from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'

import './Fader.scss'

const Fader = ({songVolume, visibility, setVocalVolume}) => {
	return (
		<div className='volume'>
			<div className={`slider-container flex-item flex-item-2 ${visibility}`}>
				<input
					type='range'
					min='0'
					max='1'
					step='.01'
					value={songVolume}
					onChange={(e) => setVocalVolume(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default Fader
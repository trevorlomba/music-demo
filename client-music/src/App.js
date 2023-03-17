// import logo from './logo.svg';
import './App.scss';
import songs from './songs'
import {Featured} from './components/Featured';
import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, useSearchParams } from 'react-router-dom'
import { ShoppingCartProvider } from './context/shoppingCartContext';

// import { Howl, Howler } from 'howler'
import ReactHowler from 'react-howler'

import ReactGA from 'react-ga'
ReactGA.initialize('G-22X1L2K6WV')
ReactGA.pageview(window.location.pathname + window.location.search)



function App() {
  const [artistName, setArtistName] = useState('yes')
  const [playing, setPlaying] = useState(false)
  const [song, setSong] = useState(0)
  const [vocalVolume, setVocalVolume] = useState(1.0)

  let activeClassName = 'nav-active'

  return (
		// <ShoppingCartProvider>
			<BrowserRouter basename='/music-demo'>
				<div className='App'>
					<ReactHowler
						src={songs[song].data.songLink}
						playing={playing}
						html5={true}
						preload={true}
						format={'m4a'}
						loop={true}
						volume={vocalVolume}
					/>
					<Featured
						artistName={artistName}
						song={songs[song]}
						setSong={setSong}
						setArtistName={setArtistName}
						className='title'
						playing={playing}
						setPlaying={setPlaying}
						vocalVolume={vocalVolume}
						setVocalVolume={setVocalVolume}
					/>
					{/* <div className='volume'>
				<label>
					Volume:
					<span className='slider-container'>
						<input
							type='range'
							min='0'
							max='1'
							step='.05'
							value={vocalVolume}
							onChange={(e) =>
								setVocalVolume(e.target.value)
							}
						/>
					</span>
				</label>
			</div> */}
				</div>
			</BrowserRouter>
		// </ShoppingCartProvider>
	)
}

export default App;

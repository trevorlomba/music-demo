// import logo from './logo.svg';
import './App.scss';
import songs from './songs'
import {Featured} from './components/Featured';
import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, useSearchParams } from 'react-router-dom'
import { ShoppingCartProvider } from './context/shoppingCartContext';

// import { Howl, Howler } from 'howler'
import ReactHowler from 'react-howler'

import ReactGA, { set } from 'react-ga'
import MainSite from './components/MainSite Components/MainSite';
// ReactGA.initialize('G-22X1L2K6WV')
// ReactGA.pageview(window.location.pathname + window.location.search)

let params = new URLSearchParams(window.location.search)


function App() {
  const [artistName, setArtistName] = useState('yes')
  const [playing, setPlaying] = useState(false)
  const [song, setSong] = useState(0)
	const [songId, setSongId] = useState(songs?.findIndex(song => params.get('song') === song.data.path || 0))
  const [vocalVolume, setVocalVolume] = useState(1.0)

  let activeClassName = 'nav-active'

  useEffect(() => {
	let params = new URLSearchParams(window.location.search)
	if (params.has('song')) {
		setSongId(songs.findIndex(song => params.get('song') === song.data.path))
		setSong(songs[params.get('song')])
	}
  }
  , [])
  return (
		// <ShoppingCartProvider>
			<BrowserRouter basename='/music-demo'>
				<div className='App'>
					<ReactHowler
						src={songs[songId]?.data?.songLink}
						playing={playing}
						html5={true}
						preload={true}
						format={['m4a']}
						loop={true}
						volume={vocalVolume}
					/>
					<Featured
						artistName={artistName}
						song={songs[songId]}
						songId = {songId}
						setSongId = {setSongId}
						setSong={setSong}
						setArtistName={setArtistName}
						className='title'
						playing={playing}
						setPlaying={setPlaying}
						vocalVolume={vocalVolume}
						setVocalVolume={setVocalVolume}
					/>
					<MainSite />	
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

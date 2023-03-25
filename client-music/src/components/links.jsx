import React from 'react'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiOutlineApple } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import { RiSpotifyLine } from 'react-icons/ri'

const links = [
	{
		name: 'TikTok',
		tag: 'tiktok',
		link: 'https://www.tiktok.com/@lxvimusic',
		img: <IoLogoTiktok />,
	},
	{
		name: 'Instagram',
		tag: 'instagram',
		link: 'https://www.instagram.com/lxvimusic',
		img: <TiSocialInstagram />,
	},
	{
		name: 'Spotify',
		tag: 'spotify',
		link: 'https://open.spotify.com/artist/1VvdebwNf9wAPhoti1uQtn?C=',
		img: <RiSpotifyLine />,
	},
	{
		name: 'Apple Music',
		tag: 'apple',
		link: 'https://music.apple.com/us/artist/lxvi/990781367',
		img: <AiOutlineApple />,
	},
]

export default links

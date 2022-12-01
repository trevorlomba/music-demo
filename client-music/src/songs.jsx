import React from 'react'

import Fader from './components/Fader'
import FeaturedLinks from './components/FeaturedLinks'
import Merch from './components/Merch'

import { TiSocialInstagram } from 'react-icons/ti'
import { TbBrandSpotify } from 'react-icons/tb'
import { AiOutlineApple } from 'react-icons/ai'
import { IoShirtOutline, IoLogoTiktok } from 'react-icons/io5'
import { ImSpotify } from 'react-icons/im'
import { RiSpotifyLine } from 'react-icons/ri'

import hurtYouImage from './assets/background.gif'
import logoImage from './assets/logo.png'
import logoImage2 from './assets/logo2.png'
import saturdayImage from './assets/background2.gif'
import convoImage from './assets/convo.gif'

import merch1 from './assets/merch.png'
import merch2 from './assets/merch2.png'

const hurtYouLink = 'http://sndup.net/rs9z/d'
const saturdayLink = 'http://sndup.net/n8qt/d'
const convoLink = 'http://sndup.net/p4by/d'

const songs = [
	{
		id: 0,
		title: 'hurtYou',
		active: 'yes',
		elements: [<FeaturedLinks />, <Fader />, <Merch />],
		data: {
			background: hurtYouImage,
			logo: logoImage,
			logo2: logoImage,
			songLink: hurtYouLink,
			vocalLink: '',
			featuredLinks: [
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
					name: `Apple Music`,
					tag: 'apple',
					link: 'https://music.apple.com/us/artist/lxvi/990781367',
					img: <AiOutlineApple />,
				},
				// {
				// 	name: 'Merch',
				// 	tag: 'merch',
				// 	link: 'https://www.instagram.com/',
				// 	img: <IoShirtOutline />,
				// },
			],
			// merch: [
			// 	{ name: 'merch1', img: merch1, link: '' },
			// 	{ name: 'merch2', img: merch2, link: '' },
			// ],
		},
	},
	{
		id: 1,
		title: 'saturday',
		active: 'yes',
		elements: [<FeaturedLinks />, <Fader />, <Merch />],
		data: {
			background: saturdayImage,
			logo: logoImage,
			logo2: logoImage,
			songLink: saturdayLink,
			vocalLink: '',
			featuredLinks: [
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
					name: `Apple Music`,
					tag: 'apple',
					link: 'https://music.apple.com/us/artist/lxvi/990781367',
					img: <AiOutlineApple />,
				},
				// {
				// 	name: 'Merch',
				// 	tag: 'merch',
				// 	link: 'https://www.instagram.com/',
				// 	img: <IoShirtOutline />,
				// },
			],
			// merch: [
			// 	{ name: 'merch1', img: merch1, link: '' },
			// 	{ name: 'merch2', img: merch2, link: '' },
			// ],
		},
	},
	{
		id: 2,
		title: 'convo',
		active: 'yes',
		elements: [<FeaturedLinks />, <Fader />],
		data: {
			background: convoImage,
			logo: logoImage,
			logo2: logoImage,
			songLink: convoLink,
			vocalLink: '',
			featuredLinks: [
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
					name: `Apple Music`,
					tag: 'apple',
					link: 'https://music.apple.com/us/artist/lxvi/990781367',
					img: <AiOutlineApple />,
				},
				// {
				// 	name: 'Merch',
				// 	tag: 'merch',
				// 	link: 'https://www.instagram.com/',
				// 	img: <IoShirtOutline />,
				// },
			],
			// merch: [
			// 	{ name: 'merch1', img: merch1, link: '' },
			// 	// { name: 'merch2', img: merch2, link: '' },
			// ],
		},
	},
	// {
	// 	id: 3,
	// 	elements: [<FeaturedLinks />, <Fader />],
	// 	data: {
	// 		background: backgroundImage2,
	// 		logo: logoImage,
	// 		logo2: logoImage,
	// 		songLink: 'https://sndup.net/t984/d',
	// 		vocalLink: '',
	// 		featuredLinks: [
	// 			{
	// 				name: 'TikTok',
	// 				tag: 'tiktok',
	// 				link: 'https://www.tiktok.com/@lxvimusic',
	// 				img: <IoLogoTiktok />,
	// 			},
	// 			{
	// 				name: 'Instagram',
	// 				tag: 'instagram',
	// 				link: 'https://www.instagram.com/lxvimusic',
	// 				img: <TiSocialInstagram />,
	// 			},
	// 			{
	// 				name: 'Spotify',
	// 				tag: 'spotify',
	// 				link: 'https://open.spotify.com/artist/1VvdebwNf9wAPhoti1uQtn?C=',
	// 				img: <RiSpotifyLine />,
	// 			},
	// 			{
	// 				name: `Apple Music`,
	// 				tag: 'apple',
	// 				link: 'https://music.apple.com/us/artist/lxvi/990781367',
	// 				img: <AiOutlineApple />,
	// 			},
	// 			// {
	// 			// 	name: 'Merch',
	// 			// 	tag: 'merch',
	// 			// 	link: 'https://www.instagram.com/',
	// 			// 	img: <IoShirtOutline />,
	// 			// },
	// 		],
	// 		// merch: [
	// 		// 	{ name: 'merch1', img: merch1, link: '' },
	// 		// 	// { name: 'merch2', img: merch2, link: '' },
	// 		// ],
	// 	},
	// },
	// {
	// 	id: 1,
	// 	data: {
	// 		background: backgroundImage2,
	// 		logo: logoImage,
	// 		logo2: logoImage2,
	// 		songLink: 'https://sndup.net/wsv2/m',
	// 		vocalLink: 'https://sndup.net/9c5h/m',
	// 		featuredLinks: [
	// 			// {
	// 			// 	name: 'Tok',
	// 			// 	tag: 'tiktok',
	// 			// 	link: 'https://www.tiktok.com/@lxvimusic',
	// 			// 	img: <IoLogoTiktok />,
	// 			// },
	// 			// {
	// 			// 	name: 'Insta',
	// 			// 	tag: 'instagram',
	// 			// 	link: 'https://www.instagram.com/lxvimusic',
	// 			// 	img: <TiSocialInstagram />,
	// 			// },
	// 			// {
	// 			// 	name: 'Spot',
	// 			// 	tag: 'spotify',
	// 			// 	link: 'https://open.spotify.com/artist/1VvdebwNf9wAPhoti1uQtn?C=',
	// 			// 	img: <RiSpotifyLine />,
	// 			// },
	// 		],
	// 	},
	// },
]

export default songs
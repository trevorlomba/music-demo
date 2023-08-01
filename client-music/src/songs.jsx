import React from 'react'

import Fader from './components/Fader'
import FeaturedLinks from './components/FeaturedLinks'
import Merch from './components/Merch'

import { TiSocialInstagram } from 'react-icons/ti'
import { TbBrandSpotify } from 'react-icons/tb'
import { AiOutlineApple } from 'react-icons/ai'
import { IoShirtOutline, IoLogoTiktok } from 'react-icons/io5'
import { ImSpotify } from 'react-icons/im'
import { RiSpotifyLine, RiSoundcloudFill } from 'react-icons/ri'
// import { IoShirtOutline } from 'react-icons/io5'
import hurtYouImage from './assets/hurtYouBackground.jpg'
import logoImage from './assets/logo.png'
import logoImage2 from './assets/logo2.png'
import saturdayImage from './assets/saturdayBackground.jpg'
import convoImage from './assets/convoBackground.jpg'
import alcoholImage from './assets/alcoholBackground.jpg'

import merch1 from './assets/merch.png'
import merch2 from './assets/merch2.png'

const hurtYouLink = 'https://storage.googleapis.com/music-microsite-visuals/hurtyou%20clip.m4a'
const alcoholLink =
	'https://storage.googleapis.com/music-microsite-visuals/alc.wav'
const saturdayLink = 'https://storage.googleapis.com/music-microsite-visuals/saturday%20clip.wav'
const convoLink = 'https://storage.googleapis.com/music-microsite-visuals/convo%20clip.mov'

const hurtYouVideo = 'https://storage.googleapis.com/music-microsite-visuals/hurtuMar23(1).mp4'
const alcoholVideo = 'https://storage.googleapis.com/music-microsite-visuals/secretsMar23(1).mp4'
const saturdayVideo = 'https://storage.googleapis.com/music-microsite-visuals/satMar23(1).mp4'
const convoVideo ='https://storage.googleapis.com/music-microsite-visuals/convoMar23(1).mp4'

const songs = [
	{
		id: 0,
		title: 'Saturday',
		artist: 'LXVI',
		video: saturdayVideo,
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
					name: 'Listen on Spotify',
					tag: 'spotify',
					link: 'https://open.spotify.com/album/0nwbKgyn0uiw1iXrBorhxD',
					img: <RiSpotifyLine />,
				},
				{
					name: 'Listen on Apple Music',
					tag: 'apple',
					link: 'https://music.apple.com/us/album/saturday-single/1469468736',
					img: <RiSpotifyLine />,
				},
				{
					name: 'Listen on SoundCloud',
					tag: 'soundcloud',
					link: 'https://soundcloud.com/lxvimusic/saturday-prod-david-walker',
					img: <RiSoundcloudFill />,
				},
				{
					name: 'Follow on TikTok',
					tag: 'tiktok',
					link: 'https://www.tiktok.com/@lxvimusic',
					img: <IoLogoTiktok />,
				},
				{
					name: 'Follow on Instagram',
					tag: 'instagram',
					link: 'https://www.instagram.com/lxvimusic',
					img: <TiSocialInstagram />,
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
		title: 'Alcohol',
		video: alcoholVideo,
		artist: 'LXVI',
		active: 'yes',
		elements: [<FeaturedLinks />, <Fader />],
		data: {
			background: alcoholImage,
			logo: logoImage,
			logo2: logoImage,
			songLink: alcoholLink,
			vocalLink: '',
			featuredLinks: [
				{
					name: 'Listen on Spotify',
					tag: 'spotify',
					link: 'https://open.spotify.com/track/4p4AMEcuDfBo50xZ5BTtOf',
					img: <RiSpotifyLine />,
				},
				// {
				// 	name: 'Listen on Apple Music',
				// 	tag: 'apple',
				// 	link: 'https://music.apple.com/us/artist/lxvi/990781367',
				// 	img: <RiSpotifyLine />,
				// },
				{
					name: 'Listen on SoundCloud',
					tag: 'soundcloud',
					link: 'https://soundcloud.com/lxvimusic/alcohol-prod-ocean',
					img: <RiSoundcloudFill />,
				},
				{
					name: 'Follow on TikTok',
					tag: 'tiktok',
					link: 'https://www.tiktok.com/@lxvimusic',
					img: <IoLogoTiktok />,
				},
				{
					name: 'Follow on Instagram',
					tag: 'instagram',
					link: 'https://www.instagram.com/lxvimusic',
					img: <TiSocialInstagram />,
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
	{
		id: 2,
		title: 'Hurt You',
		artist: 'LXVI',
		video: hurtYouVideo,
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
					name: 'Listen on Spotify',
					tag: 'spotify',
					link: 'https://open.spotify.com/album/46QJF3hC3WT8CiIbCJDAZM',
					img: <RiSpotifyLine />,
				},
				{
					name: 'Listen on Apple Music',
					tag: 'apple',
					link: 'https://music.apple.com/us/album/hurt-you-single/1449223788',
					img: <RiSpotifyLine />,
				},
				{
					name: 'Listen on SoundCloud',
					tag: 'soundcloud',
					link: 'https://soundcloud.com/lxvimusic/hurt-you',
					img: <RiSoundcloudFill />,
				},
				{
					name: 'Follow on TikTok',
					tag: 'tiktok',
					link: 'https://www.tiktok.com/@lxvimusic',
					img: <IoLogoTiktok />,
				},
				{
					name: 'Follow on Instagram',
					tag: 'instagram',
					link: 'https://www.instagram.com/lxvimusic',
					img: <TiSocialInstagram />,
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
		id: 3,
		title: 'Convo',
		video: convoVideo,
		artist: 'LXVI',
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
					name: 'Listen on Spotify',
					tag: 'spotify',
					link: 'https://open.spotify.com/track/4EMguQjsd70vphaLWNprJo',
					img: <RiSpotifyLine />,
				},
				{
					name: 'Listen on Apple Music',
					tag: 'apple',
					link: 'https://music.apple.com/us/artist/lxvi/990781367',
					img: <RiSpotifyLine />,
				},
				{
					name: 'Listen on SoundCloud',
					tag: 'soundcloud',
					link: 'https://soundcloud.com/lxvimusic/lx-mix03',
					img: <RiSoundcloudFill />,
				},
				{
					name: 'Follow on TikTok',
					tag: 'tiktok',
					link: 'https://www.tiktok.com/@lxvimusic',
					img: <IoLogoTiktok />,
				},
				{
					name: 'Follow on Instagram',
					tag: 'instagram',
					link: 'https://www.instagram.com/lxvimusic',
					img: <TiSocialInstagram />,
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
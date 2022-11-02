/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Comments from "./Comments";

const PlayingDetails = () => {
	let location = window.location.search;
  const [videoData, setvideoData] = useState()
  const [videoStat, setvideoStat] = useState()

  // console.log(window.location)
  let params = new URLSearchParams(location);
  const videoID = params.get('watchid')

	useEffect(() => {
		fetch (`https://youtube.googleapis.com/youtube/v3/videos?id=${videoID}&key=AIzaSyAp4Bk7PQWSJmy1M2Y_lGdqAVIPz80OGDc&part=statistics`)
		.then(response => response.json())
		.then(result => {
			setvideoStat(result.items[0].statistics)
		  console.log(videoStat)
		})
		.catch(error => console.log('error', error));
	}, [])
  
  
	useEffect (function () {
		fetch (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=AIzaSyAp4Bk7PQWSJmy1M2Y_lGdqAVIPz80OGDc&part=statistics`)
		.then(response => response.json())
		.then(result => {
		  setvideoData(result.items[0].snippet)
		//   console.log(videoData.publishedAt.toLocaleDateString('en-US'))
		console.log(new Date(`${videoData.publishedAt}`))
		})
		.catch(error => console.log('error', error));
	}, [])

	// let PostDate = new Date(`${videoData.publishedAt}`)

	// let PostDate = videoData.publishedAt
	
	return (
		<>
			<div className='playing-title-bar left-sub py-2'>
				{!videoData ? 'Loading...' : <h5>{videoData.localized.title}</h5>}
				<div className='social-details'>
					<div id='views-date'>
						<span> views</span> • <span>{}</span>
					</div>
					<div id='reactions'></div>
				</div>
			</div>

			<div className='video-details left-sub py-2'>
				<div className='channel-details d-flex justify-content-between'>
					<div className='left'>
						{!videoData ? 'Loading...' : <h6>{videoData.channelTitle}</h6> }
						<div className='channel-fans small'>1.83M Subscribers</div>
					</div>
					<div className='right'>
						<button className='btn btn-danger'>SUBSCRIBE</button>
					</div>
				</div>
				<br/>
				{!videoData ? 'Loading...' : <p className='description'>{videoData.localized.description}</p> }
			</div>
            <Comments />
		</>
	);
};

export default PlayingDetails;

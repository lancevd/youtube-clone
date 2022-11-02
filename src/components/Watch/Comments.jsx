/** @format */
import { useState } from "react";
import React from "react";
import SingleComment from "./SingleComment";

const Comments = () => {
	let location = window.location.search;
	const [videoData, setvideoData] = useState()

	// console.log(window.location)
	let params = new URLSearchParams(location);
	const videoID = params.get('watchid')

	fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&key=AIzaSyAp4Bk7PQWSJmy1M2Y_lGdqAVIPz80OGDc&=`)
	.then(response => response.text())
	.then(result => console.log('result'))
	.catch(error => console.log('error', error));

	return (
		<div className='comment-box left-sub py-2'>
			<div
				id='comment-header'
				className='d-flex justify-content-between align-items-center'
			>
				<h6>379 Comments</h6>
				<button
					className='btn btn-primary'
					data-bs-toggle='collapse'
					href='#comments'
					role='button'
					aria-expanded='false'
					aria-controls='comments'
				>
					Show/hide
				</button>
			</div>
			<SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
		</div>
	);
};

export default Comments;

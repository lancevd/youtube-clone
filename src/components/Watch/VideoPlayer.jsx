import React from 'react';
import { useState } from 'react';

const VideoPlayer = () => {
  let location = window.location.search;
  // console.log(window.location)
  let params = new URLSearchParams(location);

  const videoID = params.get('watchid')
  // console.log(params.get('watchid'))

  /*
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=AIzaSyAp4Bk7PQWSJmy1M2Y_lGdqAVIPz80OGDc&part=player`, requestOptions)
    .then(response => response.json())
    .then(result => {
      setvideoData(result.items[0].player.embedHtml)
      console.log(videoData)
    })
    .catch(error => console.log('error', error));
    */

  return (
    <div className="screen w-100 vh-70">
        {/* {videoData} */}
        {/* <iframe width="100%" height='100%' src="//www.youtube.com/embed/$" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe width="100%" height="100%" src={`//www.youtube.com/embed/${videoID}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default VideoPlayer
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import HomeCard from './HomeCard'
// import 
// import axios from "axios";

const MoviesHome = () => {

  const [movies, setMovies] = useState([]);

  let API_KEY = "AIzaSyAp4Bk7PQWSJmy1M2Y_lGdqAVIPz80OGDc";
  let VIDEO_URL = "https://www.googleapis.com/youtube/v3/videos";
  let PART = "snippet";
  let MAX_RESULTS= 50;
  let CHART = "mostPopular"
  let REGION = "NG"
  
  

  useEffect(() => {
    fetch(`${VIDEO_URL}?part=${PART}&chart=${CHART}&regionCode=${REGION}&key=${API_KEY}&maxResults=${MAX_RESULTS}&part=statistics`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovies(data.items)
        // console.log(movies.title)
      })
      .catch(err => console.error(err));
  },[])

  if (movies.length < 1) return <h3 style={{textAlign:'center', width:'100%'}}>Loading Videos...</h3>
    

  return (
    <section className="main-display gap-3 py-3">
      
        {movies.map((movie) => (
          // console.log(movie.snippet.title)
          <HomeCard movieTitle = {movie.snippet.title} moviePoster = {movie.snippet.thumbnails.high.url} year = {movie.snippet.publishedAt} type={movie.snippet.channelTitle} id={movie.id} views={movie.statistics.viewCount} />
        )
        )}

    </section>
  )
}

export default MoviesHome
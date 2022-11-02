import React from 'react'
import PostVideoSection from '../components/Watch/PostVideoSection'
import VideoPlayer from '../components/Watch/VideoPlayer'
import './Watch.css';

const Watch = () => {
  return (
    <section  className="playing-main"> 
        <VideoPlayer /> 
        <PostVideoSection />
    </section>
  )
}

export default Watch
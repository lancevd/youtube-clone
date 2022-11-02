import React from 'react'
import MoviesHome from '../../components/moviesHome/MoviesHome'
import Sidebar from '../../Sidebar/Sidebar'

const Home = () => {
  return (
    <main>
        <Sidebar />
        <MoviesHome />
    </main>
  )
}

export default Home
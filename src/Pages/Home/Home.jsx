import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MoVie from '../../Componnants/movie'

export default function Home() {
  const [allMovies,setAllmovies]=useState([])
const paseUrl='https://image.tmdb.org/t/p/w500/'
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=96236a4aa06f5d0af259ce2d6e42c67d')
    .then((res)=>setAllmovies(res.data.results))
    .catch((err)=>console.log(err))
  }, [])
  return (
    <div className='row'>
      {allMovies.map((movie ,index)=>{
      return (
        <div key={index} className='col-3'style={{margin:"0rem 3rem 0rem 3rem"}}>
        
        <MoVie  overview={movie.overview}
            src={paseUrl+movie.poster_path}
            vote_average={movie.vote_average}
            original_language={movie.original_language}
            release_date={movie.release_date}
            popularity={movie.popularity}
            vote_count={movie.vote_count}
            title={movie.title}
            url={`/details/${movie.id}`}
            name='Details'
      />
        </div>
      
    )
      })}
    </div>
  )
}



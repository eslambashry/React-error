import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import MoVie from '../../Componnants/movie';

export default function MovieDetails() {
		const Params = useParams()
		const paseUrl='https://image.tmdb.org/t/p/w500/'
		const [singleMovie,setSingleMOvie]=useState({})
			console.log(Params);
			
		useEffect(() => {
		  axios.get(`https://api.themoviedb.org/3/movie/${Params.id}?api_key=96236a4aa06f5d0af259ce2d6e42c67d`)
			.then((res)=>setSingleMOvie(res.data)
		)
			.catch((err)=>console.log(err))
		},[])

  return (
	<MoVie  overview={singleMovie.overview}
	src={paseUrl+singleMovie.poster_path}
	vote_average={singleMovie.vote_average}
	popularity={singleMovie.popularity}
	vote_count={singleMovie.vote_count}
	title={singleMovie.title}
	loc = {Params.id}
	name='Details' />
  )
}

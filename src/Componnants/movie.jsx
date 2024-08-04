import React from 'react'
import './movie.css'
import { Link } from 'react-router-dom'
export default function MoVie(props) {


  return (
    
    <div className="hero-container">
		<div className="main-container">
			<div className="poster-container">
			<img src={props.src} className="poster" alt='...'/>
			</div>
			<div className="mocontainer">
				<div className="content">
					<h4 className="movie-title">{props.title}</h4>
					<h4 className="movie-date"><span>release date:</span> {props.release_date}</h4>
					<h4 className="movie-title"><span>original language:</span> {props.original_language}</h4>
					<p className="movie-slogan"><span>overview:</span> { props.overview}</p>
					<p className="current-price"><span>average:</span> { props.vote_average}</p>
					<p className="old-price"><span>count:</span> { props.vote_count}</p>
					{props.url && <Link to={props.url} className="btn btn-outline-warning">{props.name}</Link>} 
				</div>
			</div>
		</div>
    </div>
  )
}

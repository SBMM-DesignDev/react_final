import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






const  MovieInfo = ( {inputValue} ) => {
 
    const { imdbID } = useParams();
    const [selectedMovie, setSelectedMovie] = useState([]);

    async function movieData()  {
        if(!imdbID) return;
        try {
            const { data } = await axios.get(`https://omdbapi.com/?apikey=242fafd7&i=${imdbID}`)
            setSelectedMovie(data)
            console.log(data)
        }
        catch(error) {
            console.error('Error fetching movies:', error);
                    setSelectedMovie([])
        }
       
    }

    useEffect(() => {
        movieData()
    },[] )

  
    
return (
    <div id="__movieInfo">
        <main id="movieInfo__main">
            <div className="container__movieInfo">
                <div className="row">
                    <div className="movieInfo__selected--top-links">
                        <Link to={'/search/'}  className="movieInfo__selected--link">
                            <FontAwesomeIcon icon="fa-arrow-left" className='fa-light' />
                        </Link>
                        <Link to={'/search/'} className="movieInfo__selected--link">
                            <h2 className="movieInfo__selected--title--top">Search for more Movies</h2>
                        </Link>
                    </div>
                    <div className="movie-info__selected">
                        <figure className="movieInfo__selected--figure">
                            <img src={selectedMovie.Poster} alt="" className="movieInfo__selected--img" />
                        </figure>
                        <div className="movieInfo__selected--description">
                            <h2 className="movieInfo__selected--title">
                               {selectedMovie.Title}
                            </h2>
                            
                           
                            <div className="movieInfo__summary">
                                <div className="movieInfo__summary--title">Movie Info:</div>
                                <ul className="movieInfo__summary--details">
                                   <li className="movieInfo__details">Genre: {selectedMovie.Genre} </li>
                                   <li className="movieInfo__details">Cast: {selectedMovie.Actors} </li>
                                   <li className="movieInfo__details">Director(s): {selectedMovie.Director} </li>
                                   <li className="movieInfo__details">Writer(s): {selectedMovie.Writer} </li>
                                   <li className="movieInfo__details">Rated: {selectedMovie.Rated} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movieInfo__container">
                <div className="row">
                    <div className="movieInfo__selected--top">
                        <h2 className="movieInfo__selected--title--top">
                            Recommended Movies
                        </h2>
                    <div />
                    <div className="movieInfo__watch">
                      Movies to Watch
                           
                    </div>
                </div>
                </div>
            </div>
        </main>
    </div>
 )
};


export default MovieInfo;


  
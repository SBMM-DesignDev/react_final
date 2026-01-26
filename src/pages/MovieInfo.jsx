import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie from '../components/Movie';





const  MovieInfo = ( {inputValue, data, newSearch } ) => {
 
  
    const { imdbID } = useParams();
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [link, setLink] = useState(true);

   

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

    function backArrowMovieLink() {
       if(newSearch){
            'newSearchPresent';
        }
        if(inputValue) {
             'inputValuePresent';
        }
        
        
    }
 
    
return (
    <div id="__movieInfo">
        <main id="movieInfo__main">
            <div className="container__movieInfo">
                <div className="row">
                    <div className="movieInfo__selected--top-links">
                        <Link to={backArrowMovieLink() === 'newSearchPresent' ? `/search/${newSearch}` : `/search/${inputValue}`}  className="movieInfo__selected--link">
                            <FontAwesomeIcon icon="fa-arrow-left" className='fa-light' />
                        </Link>
                        <Link to={`/search/${inputValue}`} className="movieInfo__selected--link">
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
        </main>
    </div>
 )
};
 

export default MovieInfo;

    /*  <div className="books">
                        {selectedMovie
                        .filter((movie) => {
                            if (imdbID) {
                            // Check for id when on the individual book
                            // so the same book isnt recommended
                            return movie.Genre === imdbID.Genre && movie.imdbID != imdbID;
                            }
                            
                        })
                        .slice(0, 4)
                        .map((movie) => {
                            return <Book book={book} key={book.id} />;
                        })}
                    </div>*/
  
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Search = ( { inputValue, inputChange }) => {
    const [data, setData] = useState([])

    async function homePageSearch() {
            const { data } = await axios.get(`https://omdbapi.com/?apikey=242fafd7&s=${inputValue}`)
           
             setData(data.Search);

    }
        console.log(data)
       
    useEffect(() => {
        
        homePageSearch();
        
    }, [inputValue] )


    return (
       <>
             <div className="header__content">
                <h1 className="header__title">
                    America's leading Movie Directory
                </h1>
                <h3 className="header__sub-title"> 
                    Search movies, showtimes and theatres near you
                </h3>
                <input 
                className="input input__movie--search"
                value={inputValue} 
                onChange={(event) => event.target.value}
                  ></input>
                <a href=""   className="movie__nutton__link"> 
                <button className="button movie__button">
                    Enjoy!
                </button>
               </a> 
            <br />
                <input className="input input__zip-code--search" placeholder="Enter Zip Code"></input>
                <button className="button zip-code__button">
                    <FontAwesomeIcon icon='fa-magnifying-glass-location' className="fa-solid" />
                </button>
            </div>
          <div>
              {data.slice(0,5).map((movie, index) => (
                <div className="movie-card" key={index}>
                    <div className="movie-card__container">
                        <div className="movie-poster">
                            <img className="movie-poster--img" src="${movie.Poster}" alt="movie poster"></img>
                        </div>
                        <div className="movie-poster__info">
                            <h3 className="movie-title">${movie.Title}</h3>
                            <h5 className="movie-year">${movie.Year}</h5>
                            <p className="movie-theatre">IMAX Cinema</p>
                            <p className="movie-theatre__location">Movie City, USA</p>
                            <p className="movie-theatre--phone">(800)MOV-IE11</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default Search;

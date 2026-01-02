import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
    return (
       <>
             <div class="header__content">
                <h1 class="header__title">
                    America's leading Movie Directory
                </h1>
                <h3 class="header__sub-title"> 
                    Search movies, showtimes and theatres near you
                </h3>
                <input class="input input__movie--search" placeholder="Enter Movie or Theatre"></input>
                <a href=""  onclick="showMovieInfo(userInput)" class="movie__nutton__link"> 
                <button class="button movie__button">
                    Enjoy!
                </button>
               </a> 
            <br />
                <input class="input input__zip-code--search" placeholder="Enter Zip Code"></input>
                <button class="button zip-code__button">
                    <FontAwesomeIcon icon='fa-magnifying-glass-location' className="fa-solid" />
                </button>
            </div>
        </>
    )
}

export default Search;

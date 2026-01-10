import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Search = ( { inputValue } ) => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('')
    
    console.log(filter); 
    console.log('About to call function')
     const movieSort = (event) =>  {
        console.log('Function has started')
       setFilter(event.target.value)
       console.log(filter)
    } 
        console.log('About to call function')
     const renderMovieSort = () => {
        console.log('Function has started')
       movieSort()
        
    if (filter === "LATEST") {
        data.sort((a,b) => b.Year - a.Year);
     }
     else if (filter === "EARLIEST") {
        data.sort((a,b) => a.Year - b.Year);
     }


    }

    


    async function homePageSearch() {
                if(!inputValue) return;
                try {
                const response = await axios.get(`https://omdbapi.com/?apikey=242fafd7&s=${inputValue}`)
                setData(response.data.Search || []);
                 console.log(response)
                } catch (error) {
                    console.error('Error fetching movies:', error);
                    setData([])
                }
    }

    

    useEffect(() => {
        
        homePageSearch();
        
    }, [inputValue] )

   
    return ( <> 
       <div className="search__page--container">
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
                onChange={renderMovieSort}
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
            <div className="movie__container--filters">
                  <div className="keyword">Search for "{inputValue}"</div>
                    <div className="sort">
                        <label >Sort by Year:</label>
                    <select  onChange={(event) =>  setFilter(event.target.value) }>
                        <option value="" disabled >Sort</option>
                        <option value="LATEST">Latest Release</option>
                        <option value="EARLIEST">Oldest Release</option>

                    </select>
                    </div>
            </div>        
            <div className="movie-container">
                  
              {data.slice(0, 6).map((movie, index) => (
                <div className="movie-card" key={index}>
                
                    <div className="movie-card__container">
                        <div className="movie-poster">
                            <img className="movie-poster--img" src={movie.Poster} alt="movie poster" />
                        </div>
                        <div className="movie-poster__info">
                            <h3 className="movie-title">{movie.Title}</h3>
                            <h5 className="movie-year">{movie.Year}</h5>
                            <p className="movie-theatre">IMAX Cinema</p>
                            <p className="movie-theatre__location">Movie City, USA</p>
                            <p className="movie-theatre--phone">(800)MOV-IE11</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
            </div>
        </>
    )
}

export default Search;

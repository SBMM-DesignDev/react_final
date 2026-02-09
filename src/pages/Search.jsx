import React, { useEffect, useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

const Search = ( { data: initialData, newSearch, setNewSearch }  ) => {
    const { query: inputValue } = useParams();
    const [data, setData] = useState(initialData)
    
    
     function newQuerySearchPage() {
        if(!newSearch) return
        homePageSearch(newSearch);
        localStorage.setItem('link', newSearch)

    }

     function renderMovieSort(filter) {
       
        if (filter === "EARLIEST") {
            setData(data.slice().sort((a,b) => Number(a.Year) - Number(b.Year)));
        };
        if (filter === "LATEST") {
            setData(data.slice().sort((a,b) => Number(b.Year) - Number(a.Year)));
        };
    }

           const homePageSearch = useCallback(async (searchPageSearch) => {
                if(!inputValue) return;
                try {
                const response = await axios.get(`https://omdbapi.com/?apikey=242fafd7&s=${searchPageSearch || inputValue}`)
                setData(response.data.Search);
                 console.log(response.data.Search)
                
                } catch (error) {
                    console.error('Error fetching movies:', error);
                    setData([])
                }
    },[inputValue])

    useEffect(() => {
        homePageSearch()
        
    }, [homePageSearch] )

   
    return ( <> 
       <div className="search__page--container">
             <div className="header__content">
                <h1 className="header__title">
                    America's leading Movie Directory
                </h1>
                <div className="header__title--underline"></div>
                <h3 className="header__sub-title"> 
                    Search movies, showtimes and theatres near you
                </h3>
                <input className="input input__movie--search"  onChange={(event) => setNewSearch(event.target.value)}>
                     
                
                  </input>
                
                <button className="button movie__button" onClick={newQuerySearchPage}>
                    Enjoy!
                </button>
               
            <br />
                <input className="input input__zip-code--search" placeholder="Enter Zip Code" disabled></input>
                <button disabled className="button zip-code__button">
                    <FontAwesomeIcon icon='fa-magnifying-glass-location' className="fa-solid" />
                </button>
            </div>
            <div className="movie__container--filters">
                  <div className="keyword">Search for "{inputValue}"</div>
                    <div className="sort">
                        <label >Sort by Year: </label>
                        <select  onChange={(event)=> renderMovieSort(event.target.value)}>
                            <option defaultValue="Sort" >Sort</option>
                            <option value="LATEST">Latest Release</option>
                            <option value="EARLIEST">Oldest Release</option>

                        </select>
                    </div>
            </div>        
            <div className="movie-container">
                  
             {data.slice(0, 6).map((movie, index) => (
                <Movie movie={movie} key={index}/>
           
          
                ))}
                
            </div>
            
            </div>
        </>
    )
}

export default Search;

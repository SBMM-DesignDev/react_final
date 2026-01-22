import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Movie from '../components/Movie';

const Search = ( { data, setData} ) => {
    const { query: inputValue } = useParams();
    /*const [data, setData] = useState([])*/
    const [filter, setFilter] = useState('')
    const [newSearch, setNewSearch] = useState([inputValue])
    const navigate = useNavigate();
    
   
    function newQuerySearchPage() {
       
        homePageSearch(newSearch);
    }
    
     const movieSort = (event) =>  {
        setFilter(event.target.value)
        renderMovieSort();
    } 
        
     const renderMovieSort = () => {
        if (filter === "EARLIEST") {
            data.sort((a,b) => b.Year - a.Year);
        }
        else if (filter === "LATEST") {
            data.sort((a,b) => a.Year - b.Year);
        }
    }

           async function homePageSearch(searchPageSearch) {
                if(!inputValue) return;
                try {
                const response = await axios.get(`https://omdbapi.com/?apikey=242fafd7&s=${searchPageSearch || inputValue}`)
                setData(response.data.Search);
                 console.log(response.data.Search)
                
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
                        <label >Sort by Year:</label>
                        <select  onChange={(event) => movieSort(event) }>
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

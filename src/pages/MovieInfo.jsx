import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






const  MovieInfo = () => {
    const { imdbID } = useParams();
    const [selectedMovie, setSelectedMovie] = useState([]);

    async function movieData()  {
        if(!imdbID) return;
        try {
            const { data } = await axios.get(`https://omdbapi.com/?apikey=242fafd7&i=${imdbID}`)
            setSelectedMovie(data)
            console.log(selectedMovie)
        }
        catch(error) {
            console.error('Error fetching movies:', error);
                    setSelectedMovie([])
        }
       
    }

    useEffect(() => {
        movieData()
    },[] )
           /*<div>
            const BookInfo = ( { books, addToCart, cart } ) => {
    
 const {id} = useParams();
 const book = books.find(book =>  +book.id === +id);
 console.log(books)
 console.log(book)

 function addBookToCart(book) {
   addToCart(book)
 }
 

 function bookExistOnCart() {
    return cart.find((book) => book.id === +id)
 }*/

  
 

 return (
    <div id="__movieInfo">
        <main id="movieInfo__main">
            <div className="container__movieInfo">
                <div className="row">
                    <div className="movieInfo__selected--top-links">
                        <Link to="/2" className="movieInfo__selected--link">
                            <FontAwesomeIcon icon="fa-arrow-left" className='fa-light' />
                        </Link>
                        <Link to="/2" className="movieInfo__selected--link">
                            <h2 className="movieInfo__selected--title--top">Search for more Movies</h2>
                        </Link>
                    </div>
                    <div className="movie-info__selected">
                        <figure className="movieInfo__selected--figure">
                            <img src="" alt="" className="movieInfo__selected--img" />
                        </figure>
                        <div className="movieInfo__selected--description">
                            <h2 className="movieInfo__selected--title">
                                book.title
                            </h2>
                            
                           
                            <div className="movieInfo__summary">
                                <div className="movieInfo__summary--title">Summary</div>
                                <p className="movieInfo__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Provident,tempora magni aliquam iusto modi earum sunt iure blanditiis
                                    dolore nobis adipisci in voluptatum soluta dolorum nisi aut? Rerum, obcaecati illum?
                                </p>
                                <p className="movieInfo__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Provident,tempora magni aliquam iusto modi earum sunt iure blanditiis
                                    dolore nobis adipisci in voluptatum soluta dolorum nisi aut? Rerum, obcaecati illum?
                                </p>

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
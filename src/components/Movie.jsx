import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Movie = ( { movie } ) => {
    const navigate = useNavigate();
      const [img, setImg] = useState(null);
        const mountedRef = useRef(false);
      
    
      useEffect(() => {
       mountedRef.current = true;

        const image = new Image();
        image.src = movie.Poster;
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current) {
                    setImg(image.src);
                   
                }
            },300);
          /* console.log(img)
           console.log(movie.Poster)*/  
           console.log(img)
        };
        return () => {
            mountedRef.current = false;
        }
      }, [movie.Poster]) 

    return ( 
        <div className="movie-card">
    
    
        <>
            <div className="movie-card__container" onClick={() => navigate(`/about-movie/${movie.imdbID}/query`)}>
                <div className="movie-poster">
                    <img className="movie-poster--img" src={img} alt="movie poster" />
                </div>
                <div className="movie-poster__info">
                    <h3 className="movie-title">{movie.Title}</h3>
                    <h5 className="movie-year">{movie.Year}</h5>
                    <p className="movie-theatre">IMAX Cinema</p>
                    <p className="movie-theatre__location">Movie City, USA</p>
                    <p className="movie-theatre--phone">(800)MOV-IE11</p>
                </div>
            </div>
                    
        </>      
      
    </div>
    )
}



export default Movie;

 /*    ):(
        <>
        <div className="movie-card__skeleton"> </div>
        </>
            )*/
 
    
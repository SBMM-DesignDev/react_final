import React from 'react'
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import Alemeda from '../Assets/alemeda_theatre.jpg';
import SeatsBlueLights from '../Assets/futuristic_seats_blue_lights.jpg'
import GemTheatre from '../Assets/gem_theatre.jpg'
import TanSeats from '../Assets/tan_movie_seats.jpg'
import GroveTheatre from '../Assets/grove_theatre.jpg'
import SeatsLasers from '../Assets/seats_laser_lights.jpg'
import Majestic from '../Assets/majestic_cinema.jpg'
import BlackSeats from '../Assets/rows_blk_seats.jpg'
import Normal from '../Assets/normal_theatre.jpg'
import BlkMovieSeats from '../Assets/rows_black_movie_seats.jpg'
import NorthVirginia from '../Assets/north_virginia_theatre.png'
import SeatsRedLights from '../Assets/black_seats_red_light.png'
import Plaza from '../Assets/plaza_theatre.jpg'
import RedSeats from '../Assets/rows_red_seats.jpg'
import Tate from '../Assets/tate_theatre.jpg'
import Camera from '../Assets/rows_seats_camera_light.png'


const Home = ( { inputValue, setInputValue, goBackLink }) => {
    const slides = [
        {url:{Alemeda}, title:'Alameda_Theatre'},
        {url:{SeatsBlueLights}, title:'BlackSeatsBlueLights'},
        {url:{GemTheatre}, title:'Gem_Theatre'},
        {url:{TanSeats}, title:'Tan_Seats'},
        {url:{GroveTheatre}, title:'Grove_Theatre'},
        {url:{SeatsLasers}, title:"Lasers"},
        {url:{Majestic}, title:'Majestic_Cinema'},
        {url:{BlackSeats}, title:'Black_Seats'},
        {url:{Normal}, title:'Normal_Theatre'},
        {url:{BlkMovieSeats}, title:'Black_Movie_Seats'},
        {url:{NorthVirginia}, title:'North_Virginia_Theatre'},
        {url:{SeatsRedLights}, title:'BlackSeatsRedLights'},
        {url:{Plaza}, title:'Plaza_Theatre'},
        {url:{RedSeats}, title:'Red_Seats'},
        {url:{Tate}, title:'Tate_Theatre'},
        {url:{Camera}, title:'TheatreSeats_CameraLight'},
    ]

    const containerStyles = {
        width: "50%",
        height: "400px",
       margin: "0 50px 24px 50px",
        borderRadius: "10px",
        margin: "0 auto",
 }

  return (<>
        <h1 className="home__header--title">America's leading Movie Directory</h1>
        <div className="home__header--title-underline"></div>
         <div className="home__header--sub-title-wrapper">
         <h4 className="home__header--sub-title">Make your movie going experience the most enjoyable!!!</h4>
        </div> 
        
        <p className="home__header--description">Search for your desired movie theatre or movie title:</p>
        <div className="home__header--line"></div> 
        <div className="home__header--wrapper-slider-container">
            <div className="home__input--wrapper">
                <input 
                className="home__input home__header--movie-input" 
                type="text" 
                onChange={(event) => setInputValue(event.target.value) } 
                placeholder="Enter Movie Title"></input>
                <Link to={`/search/${inputValue}`} onClick={goBackLink}>
                    <button className="home__btn btn__Enjoy" >Enjoy</button>
                </Link><br/>
                <input className="home__input home__header--zip-input" type="number" placeholder="Enter Zip Code" disabled></input>
                <button className="home__btn btn__zip-search" disabled>Find location</button>
            </div>
            <div style={containerStyles}>
                
                <ImageSlider  slides={slides}/>
            </div>
        </div>
    </>
    )
}

   
       
export default Home;
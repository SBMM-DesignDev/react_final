import React from 'react'
import ImageSlider from '../components/ImageSlider';
import Alemeda from '../Assets/alemeda_theatre.jpg';


const Home = () => {
    const slides = [
        {url:{Alemeda}, title:'Alameda_Theatre'},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
        {url:'', title:{}},
    ]

    const containerStyles = {
        width: "75%",
        height: "400px",
       margin: "0 50px 24px 50px",
        border: "red 1px solid",
        borderRadius: "10px",
 
       
    }

    return (<div>
        <h1 className="home__header--title">America's leading Movie Directory</h1>
        <p className="home__header--description">Search for your desired movie theatre or movie title:</p>
        <div className="home__header--wrapper-slider-container">
            <div className="home__input--wrapper">
                <input className="home__input home__header--movie-input" placeholder="Enter Movie Title"></input>
                <button className="home__btn btn__Enjoy">Enjoy</button><br/>
                <input className="home__input home__header--zip-input" placeholder="Enter Zip Code"></input>
                <button className="home__btn btn__zip-search">Find location</button>
            </div>
            <div style={containerStyles}>
                <ImageSlider  slides={slides}/>
            </div>
        </div>

       <div className="home__header--sub-title-wrapper">
         <h4 className="home__header--sub-title">Make your movie going experience the most enjoyable!!!</h4>
        </div>     
    </div>
    )
}

   
       
export default Home;
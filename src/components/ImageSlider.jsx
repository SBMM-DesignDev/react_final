import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ImageSlider = ( { slides, interval = 3000 } ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
   
      

    useEffect (() => {
        function autoSlide() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        
    }
        const slideInterval = setInterval(autoSlide, interval);
         return () => clearInterval(slideInterval);
      
    }, [currentIndex, interval, slides.length]);
    

    console.log(slides)

    const sliderStyles = {
        
        height: "100%",
        position: "relative",
    };
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${Object.values(slides[currentIndex].url)})`,
    };
    const leftArrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        /*fontSize: "45px",*/
        color: "black",
        /*zIndex: "1",*/
        cursor: "pointer",
        
     };
     const rightArrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        /*fontSize: "45px",*/
        color: "black",
        /*zIndex: "1",*/
        cursor: "pointer",
         
    };



    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 
        setCurrentIndex(newIndex);
    };

        const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
        setCurrentIndex(newIndex);
    };

   

    return (
        <div style={sliderStyles}>
            
            <div style={leftArrowStyle} onClick={ goToPrevious} className="arrow_slide"> <FontAwesomeIcon icon="fa-arrow-left" className='fa-light' /></div>
            <div style={rightArrowStyle} onClick={goToNext} className="arrow_slide"><FontAwesomeIcon icon="fa-arrow-right" className='fa-light' /></div>
            <div style={slideStyles}> </div>
        </div>
    )
}

export default ImageSlider;
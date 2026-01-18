import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieInfo from './pages/MovieInfo'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [inputValue, setInputValue] = useState([])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home inputValue={inputValue} setInputValue={setInputValue} />} ></Route>
        <Route path='/2' element={<Search inputValue={inputValue} />}> </Route>
        <Route path='/:imdbID' element={<MovieInfo inputValue={inputValue}/>}></Route>
      </Routes>
      <Footer />
     
    </div>
    </Router>
  );
}

export default App;

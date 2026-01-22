import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieInfo from './pages/MovieInfo'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [inputValue, setInputValue] = useState([])
  const [data, setData] = useState([])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home inputValue={inputValue} setInputValue={setInputValue} />} ></Route>
        <Route path='/search/:query' element={<Search inputValue={inputValue} data={data} setData={setData} />}>{" "} </Route>
        <Route path='/about-movie/:imdbID/:query' element={<MovieInfo inputValue={inputValue} data={data}/>}></Route>
      </Routes>
      <Footer />
     
    </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieInfo from './pages/MovieInfo'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [inputValue, setInputValue] = useState([])
  const [data, setData] = useState([])
  const [newSearch, setNewSearch] = useState([])
  const [path, setPath] = useState(inputValue)

   function goBackLink() {
   
    localStorage.setItem('link', inputValue)
    setPath(localStorage.getItem('link'))
/*const destination = path === 'link' ? `./search/${inputValue}` : `./search/${newSearch}`*/
  }
console.log(path)



  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home inputValue={inputValue} goBackLink={goBackLink} setInputValue={setInputValue} />} ></Route>
        <Route path='/search/:query' element={ <Search inputValue={inputValue} data={data} 
        setData={setData} newSearch={newSearch} setNewSearch={setNewSearch} />}>{" "} </Route>
        <Route path='/about-movie/:imdbID/:query' element={<MovieInfo  path={path} inputValue={inputValue} data={data} newSearch={newSearch}/>}></Route>
      </Routes>
      <Footer />
     
    </div>
    </Router>
  );
}

export default App;

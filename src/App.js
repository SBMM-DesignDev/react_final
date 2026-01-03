import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Movie from './pages/Movie'
import Nav from './components/Nav'

function App() {
  const [inputValue, setInputValue] = useState([])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home inputValue={inputValue} setInputValue={setInputValue} />} ></Route>
        <Route path='/2' element={<Search inputValue={inputValue} />}> </Route>
        <Route path='/3' element={<Movie />}></Route>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Movie from './pages/Movie'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/2' element={<Search />} ></Route>
        <Route path='/3' element={<Movie />}></Route>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;

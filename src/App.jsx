import "./App.css"
import {useState} from 'react'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import MoodSelector from './components/MoodSelector'
import { MovieContext } from "./Context.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  const [watchList, setWatchList] = useState([])

  function addToWatchList(movieObj){
    setWatchList(prevWatchList => {
      // Deduplicate by TMDB movie id, not object reference.
      if (prevWatchList.some(m => m?.id === movieObj?.id)) return prevWatchList
      return [...prevWatchList, movieObj]
    })
  }

  function removeFromWatchList(movieId){
    setWatchList(prevWatchList => prevWatchList.filter(m => m?.id !== movieId))
  }

  
  return (
    <div>
      <MovieContext value={{addToWatchList, removeFromWatchList, watchList}}>
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route path='/' element={<Movies/>}></Route>
            <Route path='/watchlist' element={<Watchlist/>}></Route>
            <Route path='/mood' element={<MoodSelector/>}></Route>
          </Routes>
        </BrowserRouter>
      </MovieContext>
      
    </div>
  )
}

export default App

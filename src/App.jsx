import "./App.css"
import {useState} from 'react'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import MoodSelector from './components/MoodSelector'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Movies/>}></Route>
          <Route path='/watchlist' element={<Watchlist/>}></Route>
          <Route path='/mood' element={<MoodSelector/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

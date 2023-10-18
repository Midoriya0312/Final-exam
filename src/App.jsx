import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home_components/Home'
import Playlist from './components/Playlist_components/Playlist'
import Liked from './components/Liked_components/Liked'




function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App

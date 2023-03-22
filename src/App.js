import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, Sidebar } from './components';
import LandingPage from './components/LandingPage'



const App = () => {
  
  const [selectedCat, setSelectedCat] = useState("New")
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<LandingPage setSelectedCat={setSelectedCat} />} />
            <Route exact path='/fa' element={<Feed selectedCat={selectedCat} />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter >
    </>
  )
}

export default App


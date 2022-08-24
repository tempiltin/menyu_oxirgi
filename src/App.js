import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Pages'
const App = () => {
  return (
    <>
      <Routes>
        

        <Route path='/' element={<Index />} />
      </Routes>


    </>
  )
}

export default App
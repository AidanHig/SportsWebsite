import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom'
import { NBA } from './Components/nba'
import { NFL } from './Components/nfl'
import { Topbar } from './Components/topbar'
import { HomePage } from './Components/HomePage'

export class App extends Component {
  render() {
    return (
      <div>
      <Topbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/NBA' element={<NBA />} /> 
        <Route path='/NFL' element={<NFL />} /> 
      </Routes>
      </div>
    )
  }
}

export default App

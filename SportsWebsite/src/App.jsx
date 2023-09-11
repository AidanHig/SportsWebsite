import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom'
import { NBA } from './components/NBA'
import { NFL } from './components/NFL'
import { Topbar } from './components/Topbar'
import { HomePage } from './Components/HomePage'
import './components/index.css'

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

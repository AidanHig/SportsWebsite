import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom'
import { Topbar } from './components/Topbar'
import { HomePage } from './Components/HomePage'
import Browser from './components/Browser'
import './components/index.css'

export class App extends Component {
  render() {
    return (
      <div>
      <Topbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/NBA' element={<Browser sport = 'NBA' />} />
        <Route path='/NFL' element={<Browser sport = 'NFL' />} />
      </Routes>
      </div>
    )
  }
}

export default App

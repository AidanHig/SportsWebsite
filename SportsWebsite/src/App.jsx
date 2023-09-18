import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom'
import { Topbar } from './components/Topbar'
import { HomePage } from './Components/HomePage'
import Browser from './components/Browser'
import './components/index.css'
import Schedule from './components/Schedule'
import { Dummy } from './Components/Dummy'

export class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='NBA' element={<Browser sport = 'NBA' />}>
              <Route path='schedule' element={<Dummy/>} />
              <Route path='recentgames' element={<Schedule/>} />
              <Route path='trades' element={<Schedule/>} />
          </Route> 
        </Routes>
      </div>
    )
  }
}

export default App

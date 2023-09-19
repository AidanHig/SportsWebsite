import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom'
import { Side } from './components/Side'
import { HomePage } from './Components/HomePage'
import './components/index.css'
import Schedule from './components/Schedule'
import RecentGames from './components/RecentGames'
import Trades from './components/Trades'

export class App extends Component {
  render() {
    return (
      <div>
        <Side />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='schedule' element={<Schedule/>} />
          <Route path='recentgames' element={<RecentGames/>} />
          <Route path='trades' element={<Trades/>} />
        </Routes>
      </div>
    )
  }
}

export default App

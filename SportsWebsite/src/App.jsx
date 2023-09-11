import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom'
import { NBA } from './Components/nba'
import { NFL } from './Components/nfl'
import { Topbar } from './Components/topbar'

export class App extends Component {
  render() {
    return (
      <div>
      <Topbar />
      <Routes>
        <Route path='/' element={<NBA />}> </Route>
        <Route path='/NFL' element={<NFL />}> </Route>
      </Routes>
      </div>
    )
  }
}

export default App

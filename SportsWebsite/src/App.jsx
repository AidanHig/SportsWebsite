import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom'
import { NBA } from './Components/nba'
import { nfl } from './Components/nfl'

export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<NBA />}> </Route>
      </Routes>
    )
  }
}

export default App

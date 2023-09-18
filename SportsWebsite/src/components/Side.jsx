import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './index.css'
import Schedule from './Schedule'

export class Side extends Component {
  constructor(props) {
    super(props)
  
  }
  


  render() {
    return (
      <>
        <Routes>
          <Route path = './schedule' element = {<Schedule sport = {this.props.sport}/>}/>
        </Routes>
        <div className = 'sidebar'>
          <NavLink to ='schedule'>{this.props.sport} Schedule</NavLink>
          <NavLink to ='recentgames'>Recent Games</NavLink>
          <NavLink to ='trades'>Trades</NavLink>
        </div>
      </>
    )
  }
}

export default Side

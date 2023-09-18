import React, { Component } from 'react'
import { NavLink, Route, Routes, Outlet } from 'react-router-dom'
import './index.css'
import Schedule from './Schedule'

export class Side extends Component {
  constructor(props) {
    super(props)
  
  }
  


  render() {
    return (
      <>
        <div className = 'sidebar'>
          <NavLink to ='schedule'>{this.props.sport} Schedule</NavLink>
          <NavLink to ='recentgames'>Recent Games</NavLink>
          <NavLink to ='trades'>Trades</NavLink>
        </div>
        <Outlet/>
      </>
    )
  }
}

export default Side

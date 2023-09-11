import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Topbar extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to ='/NBA'>NBA</NavLink>
          <NavLink to ='/NFL'>NFL</NavLink>
        </nav>
      </>
    )
  }
}

export default Topbar

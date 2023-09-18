import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Topbar extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to ='/NBA'>NBA</NavLink>
        </nav>
      </>
    )
  }
}

export default Topbar

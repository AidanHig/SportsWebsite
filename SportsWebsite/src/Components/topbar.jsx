import React from 'react'
import { NavLink } from 'react-router-dom'

export const Topbar = () => {
  return (
    <nav>
        <NavLink to ='/NBA'>NBA</NavLink>
        <NavLink to ='/NFL'>NFL</NavLink>
    </nav>
  )
}

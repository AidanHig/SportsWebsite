import React from 'react'
import { Link } from 'react-router-dom'

export const Topbar = () => {
  return (
    <nav>
        <Link to ='/'>NBA</Link>
        <Link to ='/NFL'>NFL</Link>
    </nav>
  )
}

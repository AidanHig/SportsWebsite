import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Side from './Side'
import './index.css'

export class Browser extends Component {
    constructor(props) {
      super(props)

    }


  render() {
    return (
      <>
        <div>
            <Side sport = {this.props.sport} />
            {/* <Routes>
                <Route path = 'schedule' element = {<HomePage />}/>
            </Routes> */}
        </div>
        
      </>
    )
  }
}

export default Browser

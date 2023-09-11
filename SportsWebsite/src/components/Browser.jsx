import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Browser extends Component {
    constructor(props) {
      super(props)

    }


  render() {
    return (
      <>
        <div>{this.props.sport}</div>
      </>
    )
  }
}

export default Browser

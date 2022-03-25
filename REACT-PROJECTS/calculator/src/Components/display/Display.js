import React, { Component } from 'react'
import '../display/Display.css'

class Display extends Component {
  render() {
    return (
      <div className='display'>
          {this.props.data} 
      </div>
    )
  }
}

export default Display
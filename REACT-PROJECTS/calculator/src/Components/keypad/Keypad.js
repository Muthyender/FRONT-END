import React, { Component } from 'react'
import '../keypad/Keypad.css'

class Keypad extends Component {
  render() {
    return (
        <div className='keypad'>
            {this.props.children}
        </div>
    )
  }
}

export default Keypad
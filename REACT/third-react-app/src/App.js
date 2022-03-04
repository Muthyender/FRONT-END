import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // The following line can be included in your src/index.js or App.js file
import { Button } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp';
import Products from './Components/Products/Products';
import Products2 from './Components/Products/Products2'

class App extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      show: true
    }
    
  }

  productsDisplay = () => {
    this.setState(
      {
        show: !(this.state.show)
      }
    )
  }

  render()
  {
    return (
      <div className="App">
        <NavbarComp />
        <h1 className='display-1'>Welcome to our site</h1>
        <p className='lead'>Feel free to explore...</p>
        <Products />
        <Button onClick={this.productsDisplay} variant='success' className='m-3'>
          {this.state.show ? 'Hide' : 'Show'} Products
        </Button>
        {this.state.show && <Products2 />}
      </div>
    )
  }  
}

export default App;

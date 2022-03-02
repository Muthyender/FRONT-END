import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // The following line can be included in your src/index.js or App.js file
import NavbarComp from './Components/Navbar/NavbarComp';
import Products from './Components/Products/Products';


class App extends React.Component {
    render()
    {
      return (
        <div className="App">
          <NavbarComp />
          <h1 className='display-1'>Welcome to our site</h1>
          <p className='lead'>Feel free to explore...</p>
          <Products />
        </div>
      )
    }  
}

export default App;

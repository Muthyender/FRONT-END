// import Hello from './Components/Hello';
// import Hello1 from './Components/Hello1';
import HelloClass from './Components/HelloClass'
import './App.css';
import React from 'react';

// function App() 
// {
//   return (
//     <div className="App">
//       {/* <Hello greetTo='World'/>
//       <Hello greetTo='India'/>
//       <Hello greetTo='America' greetAlsoTo='Africa'/> */}

//       {/* <Hello1 greetTo='World'/>
//       <Hello1 greetTo='India'/>
//       <Hello1 greetTo='America' greetAlsoTo='Africa'/> */}

//       <HelloClass greetTo='World'/>
//       <HelloClass greetTo='India'/>
//     </div>
//   );
// }

class App extends React.Component 
{
  constructor(props)
  {
    super(props)
    console.log(this.props)
  }
  render()
  {
    return (
      <div className="App">
        {/* <Hello greetTo='World'/>
        <Hello greetTo='India'/>
        <Hello greetTo='America' greetAlsoTo='Africa'/> */}
  
        {/* <Hello1 greetTo='World'/>
        <Hello1 greetTo='India'/>
        <Hello1 greetTo='America' greetAlsoTo='Africa'/> */}
  
        <HelloClass greetTo='World'/>
        <HelloClass greetTo='India'/>
      </div>
    );
  }  
}

export default App;

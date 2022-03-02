import React from 'react';
import './App.css';
import Hello from './Components/Hello';
import Hello1 from './Components/Hello1';
import HelloClass from './Components/HelloClass'
import CounterClass from './Components/CounterClass'
import CollegeStudents from './Components/CollegeStudents/CollegeStudents';

//Class Based Component

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
        {/* Hello.js */}
        <Hello greetTo='World'/> {/* Props in React */}
        <Hello greetTo='India'/>
        <Hello greetTo='America' greetAlsoTo='Africa'/> 
  
        {/* Hello1.js */}
        <Hello1 greetTo='World'/>
        <Hello1 greetTo='India' greetAlsoTo='Peru'/>
        <Hello1 greetTo='America' greetAlsoTo='Africa'/>
  
        {/* HelloClass.js */}
        <HelloClass greetTo='India' greetAlsoTo='Rome' />
        <HelloClass greetTo='India'/>

        <CounterClass />

        <CollegeStudents />
      </div>
    );
  }  
}


// Function Based Component

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

export default App;

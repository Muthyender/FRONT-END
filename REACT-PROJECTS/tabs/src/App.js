import React from 'react';
import './App.css';
import Tabs from './Components/Tabs'
import Viewport from './Components/Viewport';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state = {
      tabNames: ['Home', 'About', 'Features']
    }
  }
  render()
  {
    return(
      <div className="App">
        <div className="browser"> 

          <Tabs tabNames={this.state.tabNames}/>

          <Viewport />

        </div>
      </div>
    )
  }
}

export default App;

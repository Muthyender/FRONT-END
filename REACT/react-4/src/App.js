import React, {useState, useEffect} from 'react' 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './Components/TableComponent'
import {Container, Button, ProgressBar} from 'react-bootstrap'

function App() 
{
  const [show, setShow] = useState(true)
  const [count, setCount] = useState(0)

  //Replicating componentDidMount using useEffect hook
  useEffect(() =>
  {
    console.log('Component Mounted')
  }, [])

  //Replicating componentDidUpdate using useEffect hook
  useEffect(() =>
  {
    console.log('Count state Updated')
  }, [count])

  useEffect(() =>
  {
    console.log('Show state Updated')
  }, [show])

  //For both state updates in single useEffect
  // useEffect(() =>
  // {
  //   console.log('Count or Show state Updated')
  // }, [count, show])

  return (
      <Container className="App">
        {show && <TableComponent />}

        <Button variant='dark' onClick={() => setShow(!show)} className='mb-2'>
          {show ? 'Hide' : 'Show'}
        </Button>

        <h1>{count}</h1>
        <ProgressBar now={count} className='m-3'/>
        
        <Button variant='success' onClick={() => setCount(count+1)}>
          Increment
        </Button>
      </Container>
  );
}

export default App;

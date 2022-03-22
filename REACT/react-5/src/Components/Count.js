import React, {useState} from 'react'
// import incrementCounter from '../redux/count/action'
import {incrementCounter, decrementCounter} from '../redux'
import {connect} from 'react-redux'

function Count(props) 
{
  // const [countInput, setCountInput] = useState(0)

  return (
      <div className='text-center'>

        <h1>Count</h1>
        <div className='display-1 mb-4' style={{fontSize: '10rem'}}>{props.count}</div>

        {/* <input type="number" value={countInput} onChange={(e) => setCountInput(Number(e.target.value))} className='d-block mx-auto my-5'/>
        
        <button className='btn btn-dark mx-2' onClick={() => props.incrementCounter(countInput)}>Increment</button>

        <button className='btn btn-dark mx-2' onClick={() => props.decrementCounter(countInput)}>Decrement</button> */}

        <button className='btn btn-dark mx-2 my-2' onClick={() => props.incrementCounter()}>Increment</button>

        <button className='btn btn-dark mx-2 my-2' onClick={() => props.decrementCounter()}>Decrement</button>

        <br />

        <button className='btn btn-dark mx-2 my-2' onClick={() => props.incrementCounter(3)}>Increment 3</button>

        <button className='btn btn-dark mx-2 my-2' onClick={() => props.decrementCounter(3)}>Decrement 3</button>

      </div>
    
  )
}

const mapStateToProps = (state) =>
{
  return{
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) =>
{
  return{
    incrementCounter: (countInput) => dispatch(incrementCounter(countInput)),
    decrementCounter: (countInput) => dispatch(decrementCounter(countInput))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count)
import React from "react";

class CounterClass extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            counter: 0,        //(Increment)
            // counter:15,     //(Decrement)
        }
    }

    incrementCounter = () =>
    {
        this.setState(prevState =>
            ({
                counter: prevState.counter+1,
            })
        )    
    }

    decrementCounter = () =>
    {
        this.setState(prevState =>
            ({
                counter: prevState.counter-1,
            })
        )
    }

    incrementBy3 = () =>
    {
        for(let i=0; i<3; i++)
        {
            this.incrementCounter()
        }
    }

    render()
    {
        return(
            <>
                <h1 style={{fontSize: '10em'}}>{this.state.counter}</h1>

                <button onClick={this.incrementCounter}>Increment</button> <br /> {/*Decrement Button*/}

                <button onClick={this.decrementCounter}>Decrement</button> <br /> {/*Decrement Button*/}

                <button onClick={this.incrementBy3}>Increment by 3</button> <br /><br /> {/*IncrementBy3 Button*/}
            </>
        )
    }
}

export default CounterClass
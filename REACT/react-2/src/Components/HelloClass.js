import React from 'react'
// import React, {Component} from 'react' (Destructuring the Component class from 'react')

class HelloClass extends React.Component
{
    constructor(props)
    {
        super(props)
        // console.log(this.props)

        this.state = 
        {
            greetToState:'Australia',
            greetAlsoToState:'Africa'
        }
    }

    changeState = () =>
    {
        // this.state.greetToState = 'Muthyender'  (States should not be changed directly like this)
        
        this.setState(
            {
            greetToState:'Muthyender',
            greetAlsoToState:'Neelam'
        })
        console.log(this.state.greetToState)
    }
    
    render()
    {
        // console.log(this.props)
        const {greetTo, greetAlsoTo} =this.props
        const {greetToState, greetAlsoToState} =this.state
        return(
            <>
                {/* Props */}
                <h1>Hello {greetTo} {greetAlsoTo && `and ${greetAlsoTo}`}</h1>  {/*We can also write this.props.greetTo and this.props.greetAlsoTo */}
                
                {/* States */}
                <h1>Hello {greetToState} and {greetAlsoToState}</h1>  {/*We can also write this.state.greetToState and this.state.greetAlsoToState */}

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in illo incidunt, quod et at ex amet unde eaque magnam eum. Quo fuga reiciendis consequatur, similique explicabo sapiente accusantium nam.</p>

                <button onClick={this.changeState}>Change States</button>
            </>
        )
    }
}

export default HelloClass
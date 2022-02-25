import React from 'react'
// import React, {Component} from 'react'


class HelloClass extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            greetTo:'Australia',
            greetAlsoTo:'Africa'
        }
    }

    changeGreetTo = () =>
    {
        this.setState({
            greetTo:'Muthyender',
            greetAlsoTo:'Neelam'
        })
    }
    
    render()
    {
        // console.log(this.props)
        // const {greetTo} =this.props
        const {greetTo, greetAlsoTo} =this.state
        return(
            <>
                <h1>Hello {greetTo} and {greetAlsoTo}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in illo incidunt, quod et at ex amet unde eaque magnam eum. Quo fuga reiciendis consequatur, similique explicabo sapiente accusantium nam.</p>
                <button onClick={this.changeGreetTo}>Change greetTo</button>
            </>
        )
    }
}

export default HelloClass
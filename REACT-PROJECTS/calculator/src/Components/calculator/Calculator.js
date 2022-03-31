import React from 'react'
import Display from '../display/Display'
import Keypad from '../keypad/Keypad'
import Button from '../button/Button'
import '../calculator/Calculator.css'

const labels = ['(', ')', 'C', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']
let str= ''
let operators = ['/', '+', '-', '*']

class Calculator extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: ''
        }
    }

    calculate = () =>
    {
        try
        {
            const result = eval(this.state.data)
            this.setState(
                {
                    data: result.toString()
                }
            )
        }
        catch(error)
        {
            this.setState(
                {
                    data: 'Error'
                }
            )
        }
    }

    handleClick = (e) =>
    {
        const value = e.target.getAttribute('data-value')
        str = str + value
        if(str.charAt(str.length-1) === '=' || str.charAt(0) === '0' || operators.includes(str.charAt(0)))
        {
            str=''
            this.setState(
                {
                    data: ''
                }
            )
        }
        switch(value)
        {
            case 'AC': 
            str = ''
                this.setState(
                    {
                        data: ''
                    }
                )
                break;
            
            case 'C' :
                str = str.slice(0,-2)
                this.setState(
                    {
                        data: this.state.data.slice(0, -1)
                    }
                )
                break;

            case '=':
                this.calculate()
                break;

            default:
                if( (operators.includes(str.charAt(str.length-1)) && operators.includes(str.charAt(str.length-2)) ) || ( (str.charAt(str.length-1) === '.' || operators.includes(str.charAt(str.length-1)) ) && ( str.charAt(str.length-2) === '.' || operators.includes(str.charAt(str.length-2)) ) ) )
                {
                    str = str.slice(0, -2) + value
                    this.setState(
                        {
                            data: this.state.data.slice(0, -1) + value
                        }
                    )
                }
                else
                {
                    this.setState(
                        {
                            data: str
                        }
                    )
                }
                break;
        }
    }

    render()
    {
        return(
            <div className='calculator'>
                <Display data= {this.state.data}/>
                <Keypad >
                    {
                        labels.map(btnData =>
                            {
                                return(
                                    <Button key={btnData} onClick={this.handleClick} label={btnData} value={btnData}/>
                                )
                            })
                    }
                </Keypad>   
            </div>
        )
    }
}

export default Calculator
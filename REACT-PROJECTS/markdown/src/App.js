import React from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = 
    {
      markdown: '',
      loading: true
    }

    this.handleChange = this.handleChange.bind(this)    
    this.changeLoader = this.changeLoader.bind(this)    
  }

  handleChange(e)
  {
    this.setState(
      {
        markdown: e.target.value
      })
  }

  changeLoader()
  {
    this.setState(
      {
        loading: false
      })
  }

  // focus()
  // {

  // }

  componentDidMount()
  {
    setTimeout(this.changeLoader, 2000);
  }

  render()
  {
    if(this.state.loading)
    {
      return (
        <div className='loader'></div>
      )
    }

    return(
      <div className="app" onChange={this.handleChange}>
        <textarea autoFocus/>
        <ReactMarkdown className='preview' children={this.state.markdown} />
      </div>
    )
  }
}

export default App;


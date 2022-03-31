import {ChatEngine} from 'react-chat-engine'
import LoginForm from './components/LoginForm';

import './App.css';

function App() 
{
  if(!localStorage.getItem('username'))
    return <LoginForm />
  return (
    <ChatEngine 
      height='100vh'
      projectID='6df2dc69-1a30-4cf3-af5f-dfbf6a5f21e4'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;

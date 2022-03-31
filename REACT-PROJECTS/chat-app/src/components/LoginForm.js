import React, {useState} from 'react'
import axios from 'axios'
import './LoginForm.css'

function LoginForm() 
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        const authObject = {
            'Project-ID': '6df2dc69-1a30-4cf3-af5f-dfbf6a5f21e4',
            'User-Name': username,
            'User-Secret': password
        }

        try
        {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        }
        catch(error)
        {
            setError("Invalid Credentials")
        }
    }
    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required/>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required/>

                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>
                                START CHATTING
                            </span>
                        </button>
                    </div>

                    <h1 className='error' align='center' style={{margin: '10px auto'}}>{error}</h1>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
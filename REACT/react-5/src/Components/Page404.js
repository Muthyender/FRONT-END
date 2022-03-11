import React from 'react'
import { Link } from 'react-router-dom'
// import LandingPage from './LandingPage'

function Page404() 
{
    return (
        <div className='text-center mt-5'>

            <h1 className='display-1 fw-bolder'>
                404
            </h1>

            <h1>
                Not Found
            </h1>

            <p>
                The resource requested could not be found on this server!
            </p>

            <p className='display-3 mt-5'>
                Go to <Link to='/' >Home</Link> Page
            </p>
        </div>
    )
}

export default Page404
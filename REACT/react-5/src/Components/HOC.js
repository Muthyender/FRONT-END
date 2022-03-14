import React from 'react'

function HOC(props) {
    console.log(props)
  return (
            <div style={{border:'2px solid black', padding:'40px', borderRadius:'20px'}}>
                <props.component />
            </div>
        )
}

export default HOC
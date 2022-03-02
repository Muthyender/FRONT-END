import React from 'react'

//Default Props
const Hello = ({greetTo, greetAlsoTo = 'UK'}) =>
{
    return( 
        <>
            <h1>Hello {greetTo} and {greetAlsoTo}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in illo incidunt, quod et at ex amet unde eaque magnam eum. Quo fuga reiciendis consequatur, similique explicabo sapiente accusantium nam.</p>
        </>
    )
}

export default Hello
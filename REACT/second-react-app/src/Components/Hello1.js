import React from 'react'

// const Hello1 = ({greetTo, greetAlsoTo}) =>
// {
//     return( 
//         <>
//             <h1>Hello {greetTo} {greetAlsoTo ? ' and ' + greetAlsoTo : ''}</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in illo incidunt, quod et at ex amet unde eaque magnam eum. Quo fuga reiciendis consequatur, similique explicabo sapiente accusantium nam.</p>
//         </>
//     )
// }

const Hello1 = ({greetTo, greetAlsoTo}) =>
{
    return( 
        <>
            <h1>Hello {greetTo} {greetAlsoTo && `and ${greetAlsoTo}`}</h1> {/* Condotional Rendering*/}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in illo incidunt, quod et at ex amet unde eaque magnam eum. Quo fuga reiciendis consequatur, similique explicabo sapiente accusantium nam.</p>
        </>
    )
}

export default Hello1
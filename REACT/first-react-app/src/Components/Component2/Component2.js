import React from 'react'
import DevDescription from '../Component1/ChildComponent/DevDescription'
import './Component2.css'

function Component2() 
{
    return(
        <>
            <h1 style={{backgroundColor: 'black',color:'green'}}>Heading 2</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quae, sed modi quod facere corporis cumque possimus! Exercitationem temporibus quod reprehenderit dignissimos incidunt iusto magni mollitia natus autem sunt nihil voluptate fugiat itaque minima commodi molestiae aspernatur, fugit expedita consectetur. Dolorum facere quo, quisquam sequi cumque adipisci. Laborum ab id ducimus, commodi sit natus odio voluptate, asperiores totam sint, repellendus nemo. Magnam numquam et reiciendis, veniam neque sequi ipsam officia assumenda maxime, excepturi tenetur at velit laborum ratione repellendus quaerat nostrum quod, cumque architecto dolorem molestiae! Eum veritatis, iste quo incidunt harum voluptates dolor sed error libero eveniet, possimus saepe.
            </p>
            <DevDescription />
        </>
    )
}

export default Component2
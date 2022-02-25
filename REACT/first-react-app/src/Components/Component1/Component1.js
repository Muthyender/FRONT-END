import React from 'react'
import DevDescription from './ChildComponent/DevDescription';
import './Component1.scss'

function Component1() 
{
    return(
        <div className='Component1'>
            <h1>Heading 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias corporis delectus quis, officia necessitatibus commodi rerum sed? Doloremque repudiandae, veniam, possimus asperiores ullam unde laudantium praesentium illo odit quia in incidunt nostrum, vitae nulla molestias magnam facilis officia laboriosam necessitatibus. Quae consequatur illo enim fugit illum nobis officiis labore. Neque sed dolorem ut beatae impedit dolor maiores facere natus architecto, ipsum cumque deleniti quia labore deserunt expedita! Eaque assumenda neque, soluta perspiciatis hic similique adipisci consequuntur voluptates quod rem impedit, mollitia itaque! Corrupti qui reprehenderit aliquid esse voluptas, molestiae neque ducimus at fugiat quidem vitae eligendi, error tempore nesciunt.</p>
            <DevDescription />
        </div>
    );
}

// const Component1 = () =>
// {
//     return(
//         <div className='Component1'>
//             <h1>Heading 1</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias corporis delectus quis, officia necessitatibus commodi rerum sed? Doloremque repudiandae, veniam, possimus asperiores ullam unde laudantium praesentium illo odit quia in incidunt nostrum, vitae nulla molestias magnam facilis officia laboriosam necessitatibus. Quae consequatur illo enim fugit illum nobis officiis labore. Neque sed dolorem ut beatae impedit dolor maiores facere natus architecto, ipsum cumque deleniti quia labore deserunt expedita! Eaque assumenda neque, soluta perspiciatis hic similique adipisci consequuntur voluptates quod rem impedit, mollitia itaque! Corrupti qui reprehenderit aliquid esse voluptas, molestiae neque ducimus at fugiat quidem vitae eligendi, error tempore nesciunt.</p>
//             <DevDescription />
//         </div>
//     );
// }

export default Component1
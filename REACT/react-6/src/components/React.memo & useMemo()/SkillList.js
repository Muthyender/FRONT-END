import React from 'react'

//With using React.memo
const SkillList = React.memo(({skills}) =>
{
    console.log('rendering')
    return (
        <ul>
            {
                skills.map((skill, index) =>
                    (
                        <li key={index}>
                            {skill}
                        </li>
                    ))
            }
        </ul>
    )
})

//Without using React.memo

// const SkillList = ({skills}) =>
// {
//     console.log('rendering')
//     return (
//         <ul>
//             {
//                 skills.map((skill, index) =>
//                     (
//                         <li key={index}>
//                             {skill}
//                         </li>
//                     ))
//             }
//         </ul>
//     )
// }

export default SkillList
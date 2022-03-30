import React, {useState, createContext, useContext} from 'react'

const UserContext = createContext();
const CityContext = createContext();

function ContextComp() 
{
    const [user, setUser] = useState('Muthu')
    const [city, setCity] =  useState('Hyd')

  return (
    <UserContext.Provider value={user}>

        <CityContext.Provider value={city}>
            <h1>Hello {user}</h1>
            <Component2 user={user} />
        </CityContext.Provider>
        
    </UserContext.Provider>
  )
}

const Component2 = () =>
{
    return(
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    )
}

const Component3 = () =>
{
    return(
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    )
}

const Component4 = () =>
{
    return(
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    )
}

//Using React.Context without using useContext()
// const Component5 = () =>
// {
//     return(
//         <>
//             <h1>Component 5</h1>
//             <UserContext.Consumer>
//                 {
//                     (user) =>
//                     (
//                         <CityContext.Consumer>
//                             {
//                                 (city) => <h2>Hi {user} again, are you from {city}?</h2>
//                             }
//                         </CityContext.Consumer>
//                     )
//                 }
//             </UserContext.Consumer>
//         </>
//     )
// }

//Using useContext() hook
const Component5 = () =>
{
    const user = useContext(UserContext)
    const city = useContext(CityContext)
    return(
        <>
            <h1>Component 5</h1>
            
            <h2>Hi {user} again, are you from {city}?</h2>
        </>
    )
}
export default ContextComp
import React, { useState } from 'react'
import Books from '../Books/Books'
import './Home.css'
import axios from 'axios'
import Buttons from '../Footer/Buttons'
import Header from '../Header/Header'

function Home()
{
    const [search, setSearch] = useState("")
    const [bookData, setBookData] = useState([])
    const [functionality, setFunctionality] = useState(false)

    const searchBook = (e) =>
    {
        if(e.key === 'Enter')
        {
            if(search === "")
            alert('Please enter the name')
            
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBXAlkecJupAw52p3EWm6xHFR8Jx5e3knE&maxResults=40`)
            .then(response => 
                    setBookData(response.data.items.filter(item =>
                    {
                        return item.volumeInfo.imageLinks && item.saleInfo.listPrice
                    })
                ))
            .catch(err => console.log(err))
            
            setSearch("")
            setFunctionality(true)
        }
    }

    const searchClick = () =>
    {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBXAlkecJupAw52p3EWm6xHFR8Jx5e3knE&maxResults=40`)
            .then(response => 
                setBookData(response.data.items.filter(item =>
                {
                    return item.volumeInfo.imageLinks && item.saleInfo.listPrice
                })
            ))
            .catch(err => console.log(err))

            setSearch("")
            setFunctionality(true)
    }

    return(
        <>
            <div className='header'>
                <div className="main">
                    <div>Find your book </div>   
                    <input type="text" id="search" 
                    placeholder='Enter your book name'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress = {searchBook}/>
                    <button onClick={searchClick}><i className="fas fa-search"></i></button>
                </div>
            </div> 

            <div>
                {
                    functionality && <Header book={bookData}/>
                }
                <div className='content'>
                    <Books book={bookData}/>
                </div>
                {
                    functionality && <Buttons book={bookData}/>
                }
            </div>
             
        </>
    )
}

export default Home


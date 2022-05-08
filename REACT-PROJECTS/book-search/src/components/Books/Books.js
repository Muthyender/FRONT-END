import React, {useState} from 'react'
import './Books.css'
import Modal from './Modal'

function Books({book})
{
    const [show, setShow] = useState(false)
    const [bookItem, setBookItem] = useState()
    return(
        <>
            {
                book.map(item =>
                    {
                        let title = item.volumeInfo.title
                        if(title.length > 60)
                            title = title.slice(0, 50) + '...'
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                        let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
                        let rating = item.volumeInfo.averageRating
                        if(rating === undefined)
                            rating = 'N/A'
                        if(thumbnail !== undefined && price !== undefined)
                            return(
                                <div className='books' key={item.id} onClick={() => {setShow(true); setBookItem(item)}}>
                                    <div className="card">
                                        <img src={thumbnail} alt="Book" width={'200px'}/>
                                        <div className="description">
                                            <div className='title'>{title}</div>
                                            <div className="genre"><b>Category:</b> {item.volumeInfo.categories}</div>
                                            <div className="rating"><b>Rating:</b> {rating}</div>
                                            <div className="price">&#8377;{price}</div>
                                        </div>
                                    </div>
                                    {show && <Modal show={show} item={bookItem} closeModal={setShow}/> }
                                </div>
                            )
                    })
            }
        </>
       
    )
}

export default Books
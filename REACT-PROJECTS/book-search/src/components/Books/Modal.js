import React from 'react'
import './Modal.css'

function Modal({show, item, onClose}) 
{
    if(!show)
        return null

        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
        return (
            <div className="overlay" onClick={onClose}>
                <div className="overlay-inner" onClick={e => e.stopPropagation()}>
                    <button className='close' onClick={onClose}><i className="far fa-times-circle"></i></button>

                    <div className="inner-box">
                        <div>
                            <img src={thumbnail} alt="Book" />
                        </div>
                        <div>
                            <h1 className='title'>{item.volumeInfo.title}</h1>
                            <h3 className="author">Author: {item.volumeInfo.authors}</h3>
                            <h5 className="publishers">Publishers: {item.volumeInfo.publisher} <span></span></h5>
                            <h5>Published Date: {item.volumeInfo.publishedDate}</h5>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>

                    <p className="description">{item.volumeInfo.description}</p>
                </div>
            </div>
        )
    }

export default Modal
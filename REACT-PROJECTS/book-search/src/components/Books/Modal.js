import React from 'react'
import './Modal.css'

function Modal({show, item, closeModal}) 
{
    if(!show)
        return null

        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
        return (
            <div className="overlay">
                <div className="overlay-inner">
                    <button className='close' onClick={() => closeModal(false)}><i className="far fa-times-circle"></i></button>

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
        // return(
        //     <div className='overlay'>
        //         <div className="modalContent">
        //             <button className='close' onClick={() => closeModal(false)}>x</button>
        //             <div>
        //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos reiciendis inventore laboriosam totam molestias iste officia iusto error distinctio pariatur enim repudiandae repellendus assumenda similique expedita animi, provident libero, dolore sit natus odit necessitatibus. Unde, exercitationem ex totam quibusdam, veniam non fugiat eius aliquid minima veritatis quo dicta, nostrum optio. Perferendis rerum iure voluptates impedit dolor quasi repudiandae odit quas laudantium provident vero at, fugit necessitatibus sed. Sapiente quos quasi deleniti. Quaerat quo totam impedit nesciunt? Eaque, error deserunt? Eum, reiciendis! Quidem cum praesentium voluptate odio similique ex nihil blanditiis possimus fugit deleniti nam architecto inventore, in quibusdam adipisci.
        //             </div>
        //         </div>
        //     </div>
        // )
    }
// }

export default Modal
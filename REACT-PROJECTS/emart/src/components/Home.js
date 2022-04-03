import React from 'react'
import {Card} from 'react-bootstrap'
import bg from '../assets/images/background2.jpg'
import Products from './Products/Products'

function Home() {
    return (
        <div>
            <Card className="bg-dark text-white border-0 text-center">
                <Card.Img src={bg} alt="Background" height={'550px'}/>
                <Card.ImgOverlay className='d-flex flex-column justify-content-center' direction="horizontal">
                    <Card.Title className='display-2 fw-bolder'>NEW SEASON ARRIVALS</Card.Title>
                    <Card.Text className='display-5'>
                        CHECK OUT ALL THE TRENDS
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

            <Products />
        </div>
    )
}

export default Home
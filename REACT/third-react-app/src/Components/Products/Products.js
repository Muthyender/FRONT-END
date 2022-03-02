import React from 'react'
import {Card, Container, Row, Col, Button} from 'react-bootstrap'

function Products()
{
    const products = [
        {
            id: 1,
            title: 'Headphone 1',
            description: "Headphone 1 example text to build on the card title and make up the bulk of the card's content.",
            src: 'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        },
        {
            id: 2,
            title: 'Headphone 2',
            description: "Headphone 2 example text to build on the card title and make up the bulk of the card's content.",
            src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80',
        },
        {
            id: 3,
            title: 'Headphone 3',
            description: "Headphone 3 example text to build on the card title and make up the bulk of the card's content.",
            src: 'https://cdn.vox-cdn.com/thumbor/xj5dqAJC4HirPrHgkblx68ltAyM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/70392556/bfarsace_190903_3639_0007.0.jpg',
        },
    ]
    return (
        <>
            <Container>
                <Row>
                    {
                        products.map((product, index) =>
                            <Col md={4} key={index}>
                                <Card style={{ width: '18rem' }} className='my-3 mx-auto'>
                                    <Card.Img variant="top" src={product.src}/>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <Button variant="primary">Buy</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>  
            </Container>
        </>
    )
}

export default Products
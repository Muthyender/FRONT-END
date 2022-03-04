import React from "react";
import {Card, Container, Row, Col, Button, Spinner} from 'react-bootstrap'

class Products2 extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log('Inside the constructor')
        this.state = 
        {
            count:0,
            products: [],
        }
    }

    componentDidMount()
    {
        console.log('Inside componentDidMount')
        setTimeout(() => 
            this.setState({
                count:1,
                products : [
                    {
                        id: 1,
                        title: 'Headphone 1',
                        description: "Headphone 1 example text to build on the card title and make up the bulk of the card's content.",
                        src: 'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80',
                        addedToCart: false,
                    },
                    {
                        id: 2,
                        title: 'Headphone 2',
                        description: "Headphone 2 example text to build on the card title and make up the bulk of the card's content.",
                        src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                        addedToCart: false,
                    },
                    {
                        id: 3,
                        title: 'Headphone 3',
                        description: "Headphone 3 example text to build on the card title and make up the bulk of the card's content.",
                        src: 'https://cdn.vox-cdn.com/thumbor/xj5dqAJC4HirPrHgkblx68ltAyM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/70392556/bfarsace_190903_3639_0007.0.jpg',
                        addedToCart: false,
                    },
                ]
            }),
        2000)
    }
    
    componentDidUpdate()
    {
        console.log('Inside the componentDidUpdate')

        //(State update in componentDidUpdate() should never be done)
        // this.setState({
        //     count: this.state.count+1
        // })
    }

    componentWillUnmount()
    {
        console.log('Inside the componentWillUnmount : Component is about to be unmouunted')
    }

    addToCart(index)
    {
        let updatedProducts = this.state.products
        updatedProducts[index].addedToCart = true

        this.setState({
                products:updatedProducts
            })
    }

    render()
    {
        console.log('Inside the render method')
        return(
            <>
                <h2>Customers: {this.state.count}</h2>
                <Container>
                    {this.state.products.length === 0 ?
                        (<Spinner animation="border" variant="primary"/>) : 
                        (<Row>
                            {
                                this.state.products.map((product, index) =>
                                    <Col md={4} key={index}>
                                        <Card style={{ width: '18rem' }} className='my-3 mx-auto'>
                                            <Card.Img variant="top" src={product.src}/>
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>
                                                    {product.description}
                                                </Card.Text>
                                                <Button variant="primary" className="mx-2">BUY</Button>

                                                <Button variant="warning" className="mx-2" onClick={() => this.addToCart(index)}>
                                                    {product.addedToCart ? 'ADDED TO CART' : 'ADD TO CART'}
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>) 
                    }    
                </Container>
            </>
        )
    }
}

export default Products2
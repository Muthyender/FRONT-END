import React, {useState, useEffect} from 'react'
import {Button, Card} from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import {NavLink} from 'react-router-dom'

function Products() 
{
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    // let componentMounted = true

    useEffect(() =>
    {
        const getProducts = async () =>
        {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")

            // if(componentMounted)
            // {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                // console.log(filter)
            // }
            // return () =>
            // {
            //     componentMounted = false
            // }
        }

        getProducts()
    },[])

    const Loading = () =>
    {
        return(
            <>
                {/* <Spinner animation="border" className='mx-auto'/> */}
                <div className="col-lg-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct = (category) =>
    {
        const updatedList = data.filter((x) => x.category === category)
        setFilter(updatedList)
    }

    const ShowProducts = () =>
    {
        return(
            <>
                <div className="buttons mb-5">
                    <Button variant='outline-dark' className='m-1' onClick={()=>setFilter(data)}>All</Button>
                    <Button variant='outline-dark' className='m-1' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</Button>
                    <Button variant='outline-dark' className='m-1' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</Button>
                    <Button variant='outline-dark' className='m-1' onClick={()=>filterProduct('electronics')}>Electronics</Button>
                    <Button variant='outline-dark' className='m-1' onClick={()=>filterProduct('jewelery')}>Jewellery</Button>
                </div>

                {   
                    filter.map(product =>
                    {
                        return(
                            <div className="col-lg-3 col-md-4 mb-4" key={product.id}>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={product.image} alt={product.title} height='250px'/>
                                    <Card.Body className='mb-3'>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text className='lead fw-bold'>
                                            $ {product.price}
                                        </Card.Text>
                                    </Card.Body>
                                    <Button 
                                        as={NavLink} to={`/products/${product.id}`} 
                                        variant="outline-dark" 
                                        style={{position:'relative', bottom: '20px', width:'90px', margin:'auto'}}
                                    >
                                        Buy Now
                                    </Button>
                                </Card>
                            </div>
                        )
                    })
                }
            </>
        )   
    }

    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-12 mb-4">
                    <p className='display-6 fw-bold'>
                        Latest Products
                    </p>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products
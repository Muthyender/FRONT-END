import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/action'
import './Product.css'

function Product() 
{
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const addProduct = (product) =>
    {
        dispatch(addCart(product))
    }

    useEffect(() =>
    {
        const getProduct = async () =>
        {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [id])

    const Loading = () =>
    {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{marginLeft: 6}}/>
                </div>
            </>
        )
    }

    const ShowProduct = () =>
    {
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height='100%' width='90%'/>
                </div>
                <div className="col-md-6 my-3">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className='display-5'>
                        {product.title}
                    </h1>
                    <p className="lead">
                        Rating - {product.rating && product.rating.rate}&nbsp;
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                    </p>
                    <h3 className='display-6 fw-bold my-3'>
                        $ {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <Button variant='outline-dark' size='lg' className='mx-2' onClick={() => addProduct(product)}>
                        Add to Cart
                    </Button>
                    <Button as={NavLink} to='/cart' variant='dark' size='lg' className='mx-2'>
                        Go to Cart
                    </Button>
                </div>
            </>
        )
    }

    return (
        <div className='container py-4'>
            <div className="row myRow">
                {
                    loading ? <Loading /> : <ShowProduct />
                }
            </div>
        </div>
    )
}

export default Product
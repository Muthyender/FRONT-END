import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {deleteCart, addCart} from '../redux/action/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Cart() 
{
    const state = useSelector(state => state.handleCart)
    const dispatch = useDispatch()

    const emptyCart = () =>
    {
        return(
            <div className="px-4 my-5">
                <h1>Your Cart is empty</h1>
            </div>
        )
    }

    const cartItems = (product) =>
    {
        return(
            <div className="container row py-4" key={product.id}>
                <div className="col-md-7">
                    <img src={product.image} alt={product.title} height='200px' width='180px'/>
                </div>
                <div className="col-md-5 align-items-center m-auto">
                    <h3>{product.title}</h3>
                    <p className='lead fw-bold'>
                        {product.qty} x $ {product.price} = $ {product.qty * product.price}
                    </p>
                    <Button variant="outline-dark" onClick={() => dispatch(deleteCart(product))} className='mx-2'>
                        <FontAwesomeIcon icon="fa-solid fa-minus" />
                    </Button>
                    <Button variant="outline-dark" id='+' onClick={() => dispatch(addCart(product))} className='mx-2'>
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </Button>
                </div>
            </div>
        )
    }
    
    const button = () =>
    {
        return(
            <div className="container my-4">
                    <hr />
                    <Button variant='outline-dark' disabled='true' size='lg' className='my-3'>
                        <Link to='/checkout' style={{color:'inherit', textDecoration:'inherit'}}>Proceed to Checkout</Link>
                    </Button>
            </div>
        )
    }

    return (
        <>
            {
                state.length === 0 && emptyCart()
            }
            {
                state.length !== 0 && state.map(cartItems)
            }
            {
                state.length !== 0 && button()
            }
            
        </>
    )
}

export default Cart



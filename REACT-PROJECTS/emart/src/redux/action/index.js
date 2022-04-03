//To Add item to Cart
export const addCart = (product) =>
{
    return{
        type: 'ADDITEM',
        payload: product
    }
}

//To Delete item from Cart
export const deleteCart = (product) =>
{
    return{
        type: 'DELITEM',
        payload: product
    }
}
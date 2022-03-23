import axios from 'axios'

//Action type constant
export const FETCH_POST_REQUESTED = 'FETCH_POST_REQUESTED'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'

//Action Creator
export const fetchPostRequested = () =>
{
    return{
        type: FETCH_POST_REQUESTED
    }
}

export const fetchPostsSuccess = (post) =>
{
    return{
        type: FETCH_POST_SUCCESS,
        payload: post
    }
}
export const fetchPostsFailure = (error) =>
{
    return{
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

export const fetchPost = (id) =>
{
    return async (dispatch) => {
        try
        {
            dispatch(fetchPostRequested())
            let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            dispatch(fetchPostsSuccess(res.data))
        }
        catch(error)
        {
            dispatch(fetchPostsFailure(error.message))
        }
    }
}
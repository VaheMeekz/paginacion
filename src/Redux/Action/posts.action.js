import axios from "axios";

export const GET_POST = 'GET_POST'

export const getPostThunk = (page,limit) => {
    return async dispatch => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
        dispatch({
            payload: response,
            type: GET_POST
        })
    }
}
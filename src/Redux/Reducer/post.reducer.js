import {GET_POST} from "../Action/posts.action";
const initialState = {
    posts: [],
    count: 0 ,
    limit: 12
}
const postReducer =  (state = initialState, action) => {
    switch (action.type){
        case GET_POST:
            return {
                ...state,
                posts: action.payload.data,
                count: action.payload.headers['x-total-count']
            }
        default :
            return state
    }
}
export default postReducer;
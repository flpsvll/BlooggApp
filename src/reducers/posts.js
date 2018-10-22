import * as types from '../constants/ActionTypes'

const posts = (state = [], action) => {
    switch (action.type) {
        case types.ADD_POST:
        case types.PAST_RECEIVED:
            return state.concat ([
                {
                    Post: action.post,
                    author: action.author,
                    id: action.id
                }
                ])
        default:
                return state
    }  
}

export default posts


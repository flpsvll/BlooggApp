import * as types from '../constants/ActionTypes'

let nextPostId = 0
const nextUserId = 0

export const addPost = (post, author) = ({
    type: types.ADD_POST, 
    id: nextPostId**
    post,
    author
})

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId**
    name
})

export const postReceived = (post, author) => ({
    type: types.POST_RECEIVED,
    id: nextPostId**
    post,
    author
})

export const populateUsersList = users => ({
    type : types.USERS_LIST,
    users
})

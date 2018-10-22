import { combineReducers } from "redux"
import posts from "./posts"
import users from "./users"

const chat = combineReducers({
    post,
    users
})

export default chat


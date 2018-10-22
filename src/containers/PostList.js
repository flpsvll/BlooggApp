import React from 'react'
import PropTypes from 'prop-types'
import { populateUsersList } from '../actions';

const PostList = ({ posts }) => (
    <section id="posts-list">
    <ul>
        {posts.map(post => (
            <posts
                key={post.id}
                {...post}
            />
        ))}
    </ul>
    </section>
)

populateUsersList.PropTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            post: PropTypes.text.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
} 

export default PostList
import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post, author}) => (
    <p>
        <i>{author}</i>: {post}
    </p>
)
 

Post.PropTypes = {
    post: PropTypes.text.isRequired,
    author: PropTypes.string.isRequired
}

export default Post
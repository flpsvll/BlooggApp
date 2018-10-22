import React from 'react'
import PropTypes from 'prop-types'

const AddPost = (props) => {
    let input

    return (
        <section id="new-post">

            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    props.dispatch(input.value, 'Me')
                    input.value = ''
                }
            }}
            type="text"
            ref{(node) => {
                input = node
            }}
        </section>
    )
}

AddPost.PropTypes = {
    dispatch: PropTypes.func.isRequired
}
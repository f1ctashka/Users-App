import React from 'react';

import './styles.css'

const Card = ({post}) => {
    return (
        <div className="card">
            <div className="content">
                <h1>{post.userId}</h1>
                <h2>{post.title}</h2>
                <div>{post.body}</div>
            </div>
        </div>
    )
}

export default Card
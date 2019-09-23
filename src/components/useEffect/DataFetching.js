import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => console.log(err))

        return () => {

        };
    }, [])

    const postList = posts.map(post => (
        <li key={post.id}>{post.title}</li>
    ))

    return (
        <div>
            <ul>{postList}</ul>
        </div>
    )
}

export default DataFetching

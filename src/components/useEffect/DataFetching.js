import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {

    // const [posts, setPosts] = useState([])
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idFrombuttonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => console.log(err))

    }, [idFrombuttonClick])

    // const postList = posts.map(post => (
    //     <li key={post.id}>{post.title}</li>
    // ))

    const { title } = posts

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button
                type="button"
                onClick={handleClick}
            >Fetch Post</button>
            <br />
            {title}
            {/* <ul>{postList}</ul> */}
        </div>
    )
}

export default DataFetching

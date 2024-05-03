import { useEffect, useState } from 'react'
import classes from './Posts.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])
  const getShortValue = (value) => {
    if (value.length > 20) {
      return value.slice(1, 20) + "...";
    }
    return value;
  }
  return (
    <div className={classes.postst}>
      {posts.map((post) => (
        <div className={classes.posts} key={`post-${post.id}`}>
          <h1>{post.id}</h1>
          <h3>{post.title}</h3>
          <p>{getShortValue(post.body)}<Link to={`/posts/${post.id}`}>more</Link></p>

        </div>

      ))}
    </div>
  )
}

export default Posts

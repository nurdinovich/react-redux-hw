import classes from './Posts.module.css'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Posts from './Posts';

const PostsDetails = () => {
  const navigate = useNavigate();
  const params = useParams()
  const [post, setPost] = useState(null)
  const onBackClick = () => navigate(-1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
  }, [])
  console.log(params);
  return (
    <div className={classes.postst}>
      <div className={classes.posts}>{post && (
        <>
          <h1>{post.id}</h1>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}</div>

      <button className={classes.btn} onClick={onBackClick}>back</button>
    </div>

  )
}

export default PostsDetails
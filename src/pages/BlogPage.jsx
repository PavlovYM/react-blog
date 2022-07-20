import React from 'react'
import {useParams } from 'react-router-dom'

const BlogPage = () => {
  const {id} = useParams()

  return (
    <div>BlogPage {id}</div>
  )
}

export default BlogPage
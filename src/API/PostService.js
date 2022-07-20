import axios from "axios"

export const getAll = async (page = 1, limit = 10) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`,  {
    params: {
      _page: page,
      _limit: limit,
    }
  })
  return response
}

export const getPostById = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response
}
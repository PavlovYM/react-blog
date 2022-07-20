import axios from "axios"

export const getAll = async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  return response
}
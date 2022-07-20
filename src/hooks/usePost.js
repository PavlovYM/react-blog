import React, {useMemo} from "react"

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if(sort){
      return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [posts, sort])

  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [sortedPosts, query])

  return sortedAndSearchPosts;
}

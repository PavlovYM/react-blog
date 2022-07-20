import React, { useEffect, useState } from "react";

import PostActions from "../components/Post/PostActions";
import PostForm from "../components/Post/PostForm";
import PostList from "../components/Post/PostList";
import MyDialog from "../components/theme/dialog/MyDialog";
import { usePosts } from "../hooks/usePost";
import { getAll } from "../API/PostService";
import Loader from "../components/theme/loader/Loader";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [isPostLoading, setIsPostLoading] = useState(false)

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  const fetchPosts = async () => {
    setIsPostLoading(true)
    const posts = await getAll()
    setPosts(posts.data)
    setIsPostLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (post) => {
    setPosts([...posts, post]);
    setDialog(false);
  };
  const postRemove = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <PostActions dialog={setDialog} filter={filter} setFilter={setFilter} />

      {isPostLoading 
        ? <Loader/>
        : <PostList
            posts={sortedAndSearchPosts}
            title={"Blog {JSON} Placeholder"}
            remove={postRemove}
          />
       }
      
      <MyDialog show={dialog} onClick={() => setDialog(false)}>
        <PostForm create={createPost} />
      </MyDialog>
    </>
  );
};

export default Blog;

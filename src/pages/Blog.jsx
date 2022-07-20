import React, { useMemo, useState } from "react";
import PostActions from "../components/Post/PostActions";
import PostForm from "../components/Post/PostForm";
import PostList from "../components/Post/PostList";
import MyDialog from "../components/theme/dialog/MyDialog";
import { usePosts } from "../hooks/usePost";

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript1",
      body: "Note that the development build is not optimized3",
    },
    {
      id: 2,
      title: "Javascript2",
      body: "Note that the development build is not optimized2",
    },
    {
      id: 3,
      title: "Javascript3",
      body: "Note that the development build is not optimized1",
    },
    {
      id: 4,
      title: "Javascript4",
      body: "Note that the development build is not optimized4",
    },
    {
      id: 5,
      title: "Javascript5",
      body: "Note that the development build is not optimized5",
    },
  ]);
  const [dialog, setDialog] = useState(false);
  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

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
      
      <PostList
        posts={sortedAndSearchPosts}
        title={"Blog {JSON} Placeholder"}
        remove={postRemove}
      />

      <MyDialog show={dialog} onClick={() => setDialog(false)}>
        <PostForm create={createPost} />
      </MyDialog>
    </>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";

import PostActions from "../components/Post/PostActions";
import PostForm from "../components/Post/PostForm";
import PostList from "../components/Post/PostList";
import MyDialog from "../components/theme/dialog/MyDialog";
import { usePosts } from "../hooks/usePost";
import { getAll } from "../API/PostService";
import Loader from "../components/theme/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/theme/pagination/Pagination";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await getAll(page, limit);
    setPosts(posts.data);
    const totalCount = posts.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (post) => {
    setPosts([...posts, post]);
    setDialog(false);
  };

  const postRemove = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const changePage = (p) => {
    setPage(p)
  }

  return (
    <>
      <PostActions dialog={setDialog} filter={filter} setFilter={setFilter} />

      {postError && (
        <div className="post-title">
          <h2>{postError}</h2>
        </div>
      )}

      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={sortedAndSearchPosts}
          title={"Blog {JSON} Placeholder"}
          remove={postRemove}
        />
      )}

      <Pagination totalPages={totalPages} page={page} onClick={changePage}/>

      <MyDialog show={dialog} onClick={() => setDialog(false)}>
        <PostForm create={createPost} />
      </MyDialog>
    </>
  );
};

export default Blog;

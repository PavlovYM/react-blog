import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <div className="post-title">
        <h2>Note Posts !</h2>
      </div>
    );
  }

  return (
    <>
      <div className="post-title">
        <h2>{title}</h2>
      </div>

      <TransitionGroup className="post-grid">
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="item">
            <PostItem post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default PostList;

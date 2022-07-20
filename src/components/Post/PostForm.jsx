import React, { useState } from "react";
import MyButton from "../theme/button/MyButton";
import MyInput from "../theme/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const createPost = () => {
    if(post.title && post.body) {
      create({ ...post, id: Date.now() });
      setPost({ title: "", body: "" });
    }
  };
  return (
    <form>
      <MyInput
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Body"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton type="button" onClick={createPost}>
        Create post
      </MyButton>
    </form>
  );
};

export default PostForm;

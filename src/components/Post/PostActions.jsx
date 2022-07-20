import React from "react";
import MyInput from "../theme/input/MyInput";
import MySelect from "../theme/select/MySelect";
import MyButton from "../theme/button/MyButton";

const PostActions = ({ dialog, filter, setFilter }) => {
  return (
    <div className="post-header">
      <div>
        <MySelect
          defaultValue="Sort ..."
          options={[
            { title: "Sort Title", value: "title" },
            { title: "Sort Body", value: "body" },
          ]}
          value={filter.sort}
          onChange={(sort) => setFilter({ ...filter, sort: sort })}
        />
      </div>
      <div>
        <MyInput
          type="text"
          placeholder="Search..."
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
      </div>
      <div></div>
      <div>
        <MyButton onClick={() => dialog(true)}>Create Post</MyButton>
      </div>
    </div>
  );
};

export default PostActions;

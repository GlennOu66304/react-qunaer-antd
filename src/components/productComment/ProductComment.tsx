import React from "react";
import { List, Comment } from "antd";
// import styles from './Product.module.css'
interface propTypes {
  data: {
    author: string;
    avatar: string;
    content: string;
    createDate: string;
  }[];
}

export const ProductComment: React.FC<propTypes> = ({ data }) => {
  return (
    <List
      dataSource={data}
      itemLayout={"horizontal"}
      renderItem={(item) => {
        return (
          <li>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.createDate}
            />
          </li>
        );
      }}
    />
  );
};

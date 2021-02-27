import React from 'react';
import { useParams } from 'react-router-dom';
import {
  RecordProvider,
  useRecord,
} from '../../lib';

const PostShowView = () => {
  const post = useRecord();

  if (!post) return null;

  return (
    <div>
      <h1>Post #{post.id}</h1>
      <h3>Title</h3>
      <p>{post.title}</p>
      <h3>Content</h3>
      <p>{post.content}</p>
      <h3>Author</h3>
      <p>{post.author}</p>
    </div>
  );
};

const PostShow = () => {
  const { postId } = useParams();

  return (
    <RecordProvider id={postId} resource="posts">
      <PostShowView />
    </RecordProvider>
  );
};

export default PostShow;

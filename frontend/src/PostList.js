import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListProvider,
  useRecord,
  ListIterator,
  useList,
} from '../../lib';

const PostListItem = () => {
  const post = useRecord();

  if (!post) return null;

  return (
    <li>{post.title}: {post.content}. <Link to={post.id}>Edit</Link></li>
  );
};

const PostListSummary = () => {
  const postList = useList();

  if (!postList) return <h3>Loading posts...</h3>;

  return (
    <h3>Found {postList.length} post(s)</h3>
  );
};

const PostList = () => (
  <ListProvider resource="posts">
    <PostListSummary />
    <ul>
      <ListIterator>
        <PostListItem />
      </ListIterator>
    </ul>
  </ListProvider>
);

export default PostList;

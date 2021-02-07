import React, { useContext } from 'react';
import { ListProvider, RecordContext, ListIterator, ListContext } from '../../lib';

const PostListItem = () => {
  const post = useContext(RecordContext);

  if (!post) return null;

  return (
    <li>{post.title}: {post.content}</li>
  )
}

const PostListSummary = () => {
  const postList = useContext(ListContext);

  if (!postList) return <h3>Loading posts...</h3>;

  return (
    <h3>Found {postList.length} post(s)</h3>
  );
}

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
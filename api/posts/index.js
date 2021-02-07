const express = require('express');
const { v4: uuid } = require('uuid');

const postsRouter = express.Router();

const postsData = [
  {
    id: uuid(),
    title: 'My fist post',
    content: 'Lorem ipsum...',
    author: 'Bruno',
  },
  {
    id: uuid(),
    title: 'My second post',
    content: 'A little bit more interesting',
    author: 'Bruno',
  },
]

postsRouter.get('', (req, res) => {
  res.json(postsData)
});

postsRouter.post('', (req, res) => {
  const id = uuid();
  const newPost = Object.assign(req.body, { id });
  postsData.push(newPost);
  res.json(newPost)
});

postsRouter.get('/:id', (req, res) => {
  const post = postsData.find((postData) => postData.id === req.params.id);
  if (!post) {
    res.status(404).json({ message: 'Not found' });
  } else {
    res.json(post);
  }
});

module.exports = postsRouter;
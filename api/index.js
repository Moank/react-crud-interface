const express = require('express');
const cors = require('cors');

const postsRouter = require('./posts');

const app = express();
const port = 3000;

app.use(cors());

app.use('/posts', postsRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});

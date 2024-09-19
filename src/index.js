import fastify from 'fastify';

const app = fastify();
const port = 3000;

// app.get('/hello', (req, res) => {
//   const name = req.query.name;
//   if (!name) {
//     res.send('Hello, World!');
//   } else {
//     res.send(`Hello, ${name}!`);
//   }
// });

app.get('/users/:id/post/:postId', (req, res) => {
  res.send(`User ID: ${req.params.id}; Post ID: ${req.params.postId}`);
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
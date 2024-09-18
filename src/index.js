import fastify from 'fastify';

const app = fastify();
const port = 3000;

// app.get('/users', (req, res) => {
//   res.send('GET /users');
// });

// app.post('/users', (req, res) => {
//   res.send('POST /users');
// });

// const state = {
//   users: [
//     {
//       id: 1,
//       name: 'Alice',
//     },
//     {
//       id: 2,
//       name: 'Bob',
//     },
//   ],
// };

app.get('/hello', (req, res) => {
  const name = req.query.name;
  // const { id } = req.query;
  // const user = state.users.find(user => user.id === parseInt(id));
  if (!name) {
    res.send('Hello, World!');
  } else {
    res.send(`Hello, ${name}!`);
  }
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
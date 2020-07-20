const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

const port = process.env.PORT || 5002;

app.use(express.static(path.resolve(process.cwd(), 'src')));

const data = [
  {userId: 1, id: 19, title: "Todo Item 1", completed: true},
  {userId: 1, id: 20, title: "Todo Item 2", completed: true},
  {userId: 2, id: 21, title: "Todo Item 3", completed: false},
  {userId: 2, id: 22, title: "Todo Item 4", completed: true},
  {userId: 2, id: 23, title: "Todo Item 5", completed: false},
  {userId: 2, id: 24, title: "Todo Item 6", completed: false},
  {userId: 2, id: 25, title: "Todo Item 7", completed: true},
];

app.get('/api', (req, res) => {
  res.json(data);
});

app.post('/api', (req, res) => {
  const todo = {
    userId: req.userId || 1,
    id: req.id || Math.floor(Math.random() * Math.floor(100)),
    title: req.title,
    completed: false
  };
  data.push(todo);
  res.json({
    status: "OK",
    message: "Todo was added"
  });
});


app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

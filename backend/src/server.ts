import express from 'express';
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from the Backend!!!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

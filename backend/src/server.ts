import express from 'express';

//create server
const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World;');
});

app.listen(port, () => {
  console.log('Sever listening on port: ' + port);
});

//connect mongoose to mongodb
//process.env to access env variables
//connect expects a string, returns a promise
/*mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose connected');
    app.listen(port, () => {
      console.log('Server listening on port ' + port);
    });
  })
  .catch(console.error);*/

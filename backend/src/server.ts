import app from './app';
import env from './util/validateEnv';
import mongoose from 'mongoose';

const port = env.PORT;

//connect mongoose to mongodb
//process.env to access env variables
//connect expects a string, returns a promise
mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose connected');
    app.listen(port, () => {
      console.log('Server listening on port ' + port);
    });
  })
  .catch(console.error);

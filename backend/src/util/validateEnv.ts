//Sanitizes environment variables
//Make sure that server doesn't run without env variables
//Makes sure a string is always passed
import { cleanEnv, port, str } from 'envalid';
//import { port, str } from 'envalid/dist/validators';

export default cleanEnv(process.env, {
  MONGO_CONNECTION_STRING: str(),
  PORT: port(),
});

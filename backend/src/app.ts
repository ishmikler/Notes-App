//import express, { NextFunction, Request, Response } from 'express';
//import notesRoutes from './routes/notes';
//import morgan from 'morgan';
//import createHttpError, { isHttpError } from 'http-errors';

//logs for endpoints
//app.use(morgan('dev'));

//tell express to accept json bodies
//app.use(express.json());

//middleware that catches request to this endpoint, and forwards to notesRoutes
//app.use('/api/notes', notesRoutes);

/*app.use((req, res, next) => {
  next(createHttpError(404, 'Endpoint not found'));
});*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/*app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occured';
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;*/

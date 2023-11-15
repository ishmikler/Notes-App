import { RequestHandler } from 'express';
import NoteModel from '../models/note';

//get all notes
export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    //.exec becasue it does not return a promise by default
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

//get single note
export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;
  try {
    const note = await NoteModel.findById(noteId).exec();
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

//create note
export const createNote: RequestHandler = async (req, res, next) => {
  //send title and text in body of request
  //outside of try block b/c it wont throw an error
  const title = req.body.title;
  const text = req.body.text;

  try {
    //use mongoose to create note and save in variable so you can send back to the client and update UI
    const newNote = await NoteModel.create({
      title: title,
      text: text,
    });

    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

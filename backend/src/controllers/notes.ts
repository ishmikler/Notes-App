import { RequestHandler } from 'express';
import NoteModel from '../models/note';
import createHttpError from 'http-errors';
import mongoose from 'mongoose';

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
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, 'Invalid node ID');
    }
    const note = await NoteModel.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, 'Note not found');
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

//declare body for types
interface CreateNoteBody {
  title?: string;
  text?: string;
}

//create note
export const createNote: RequestHandler<
  unknown,
  unknown,
  CreateNoteBody,
  unknown
> = async (req, res, next) => {
  //send title and text in body of request
  //outside of try block b/c it wont throw an error
  const title = req.body.title;
  const text = req.body.text;

  try {
    if (!title) {
      throw createHttpError(400, 'Note must have a title');
    }

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

//declare interface for noteId
interface UpdateNoteParams {
  noteId: string;
}

interface UpdateNoteBody {
  title?: string;
  text?: string;
}

//update note
export const updateNote: RequestHandler<
  UpdateNoteParams,
  unknown,
  UpdateNoteBody,
  unknown
> = async (req, res, next) => {
  const noteId = req.params.noteId;
  const newTitle = req.body.title;
  const newText = req.body.text;
  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, 'Invalid node ID');
    }
    if (!newTitle) {
      throw createHttpError(400, 'Note must have a title');
    }
    const note = await NoteModel.findById(noteId).exec();

    if (!note) {
      throw createHttpError(404, 'Note not found');
    }

    note.title = newTitle;
    note.text = newText;

    //save updated note so it can be returned to call of endpoint, which allows updating in UI
    const updatedNote = await note.save();

    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

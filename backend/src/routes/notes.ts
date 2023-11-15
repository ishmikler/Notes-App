import express from 'express';
//import all controller functions
import * as NotesController from '../controllers/notes';

//create router for endpoints, which then passes to app
const router = express.Router();

//get all notes
router.get('/', NotesController.getNotes);

//get single note
//noteId is params
router.get('/:noteId', NotesController.getNote);

//create (post) note
router.post('/', NotesController.createNote);

//update (patch) note
router.patch('/:noteId', NotesController.updateNote);

//delete note
router.delete('/:noteId', NotesController.deleteNote);

export default router;

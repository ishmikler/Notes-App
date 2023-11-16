import React, { useEffect, useState } from 'react';
import { Note as NoteModel } from './models/note';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  //for rendering automatically upon page load
  //can execute side effects outside of rendering of component
  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch('/api/notes', {
          method: 'GET',
        });
        //passes json body out of request
        const notes = await response.json();
        //update state, which is an array
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
    //empty dependancy array so useEffect only executes once
  }, []);
  //map turns array of notes into component object
  return (
    <div>
      {notes.map(note => (
        <Note note={note} key={note._id} />
      ))}
    </div>
  );
}

export default App;

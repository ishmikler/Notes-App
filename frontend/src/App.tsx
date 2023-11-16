import React, { useEffect, useState } from 'react';
import './App.css';
import { Note } from './models/note';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

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

  return <div className='App'>{JSON.stringify(notes)}</div>;
}

export default App;

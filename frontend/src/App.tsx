import React, { useEffect, useState } from 'react';
import { Note as NoteModel } from './models/note';
import Note from './components/Note';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles/NotesPage.module.css';

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
    //Shape notes into grid
    <Container>
      <Row xs={1} md={2} xl={3} className='g-4'>
        {notes.map(note => (
          <Col key={note._id}>
            <Note note={note} className={styles.note} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;

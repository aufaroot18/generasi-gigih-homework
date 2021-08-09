import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NoteCard from '../../components/note/NoteCard';

function Notes() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const result = await fetch('http://localhost:8000/notes');
    const data = await result.json();

    setNotes(data);
  };

  const deleteNote = async (id) => {
    fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
    });

    getNotes();
  };

  useEffect(async () => {
    getNotes();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={4}>
            <NoteCard note={note} deleteNote={deleteNote} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Notes;

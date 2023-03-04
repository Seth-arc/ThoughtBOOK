import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import Alarm from './Alarm';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    if (note.trim() !== '') {
      setNotes([...notes, note]);
    }
  };

  const handleAlarm = () => {
    alert('It\'s time to collect your thoughts!');
  };

  return (
    <>
      <Alarm time="07:00" onAlarm={handleAlarm} />
      <div className="container">
        <h1 className="title">Thought Book</h1>
        <NoteList notes={notes} />
        <NoteForm onAddNote={handleAddNote} />
      </div>
    </>
  );
};

export default App;

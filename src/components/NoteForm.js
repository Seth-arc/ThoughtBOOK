import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddNote(noteText);
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noteText">New note:</label>
      <input
        type="text"
        id="noteText"
        value={noteText}
        onChange={(event) => setNoteText(event.target.value)}
      />
      <button type="submit">Add note</button>
    </form>
  );
};

export default NoteForm;

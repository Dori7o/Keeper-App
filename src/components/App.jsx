import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  function addNote(title, textArea) {
    const newNote = {
      title: title,
      content: textArea,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }
  function deleteNote(value) {
    setNotes((prevNotes) =>
      prevNotes.filter((element, index) => index !== value)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

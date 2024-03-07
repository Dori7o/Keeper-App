import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [textArea, setTextArea] = React.useState("");

  return (
    <div>
      <form>
        <input
          onChange={(event) => setTitle(event.target.value)}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={(event) => setTextArea(event.target.value)}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={textArea}
        />
        <button
          onClick={(event) => {
            props.addNote(title, textArea);
            setTextArea("");
            setTitle("");
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, { useState } from "react";
import { INote } from "../App";
import NoteList from "./noteList";

interface AddNoteProps {
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

const AddNote: React.FC<AddNoteProps> = ({ notes, setNotes }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (!(title.trim() && content.trim())) {
      return;
    }
    setNotes((prevNotes) => [
      ...prevNotes,
      { title, content, id: Math.random() },
    ]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      {" "}
      <form className="flex flex-col items-start gap-6 ml-10">
        <input
          className="border-2 border-aqua-500 rounded-lg mt-10 p-2"
          type="text"
          value={title}
          placeholder="Note title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          className="border-2 border-aqua-500 rounded-lg p-2 "
          value={content}
          placeholder="Note content"
          onChange={(event) => setContent(event.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-[aqua] text-violet-900 p-2 rounded-lg"
        >
          Add Note
        </button>
      </form>
      <div className="flex flex-row gap-4 flex-wrap">
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
};

export default AddNote;

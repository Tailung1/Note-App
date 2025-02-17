import React from "react";
import { INote } from "../App";
interface ISingleNoteProps {
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
  note: INote;
}

const SingleNote: React.FC<ISingleNoteProps> = ({ setNotes, note }) => {
  const handleDelete = (deleteID: number) =>
    setNotes((prevNotes) => [
      ...prevNotes.filter((note) => deleteID !== note.id),
    ]);
  return (
    <div
      className=" bg-yellow-400 w-[150px] h-[100px] flex flex-col gap-2 "
      key={Math.random()}
    >
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button
        onClick={() => handleDelete(note.id)}
        className="bg-red-500 w-[50px]"
      >
        Delete
      </button>
    </div>
  );
};

export default SingleNote

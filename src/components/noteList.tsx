import React from "react";
import { INote } from "../App";
import SingleNote from "./SingleNote";
interface INoteListProps {
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

const NoteList: React.FC<INoteListProps> = ({ notes, setNotes }) => {
  return <div>{notes.map(note =><SingleNote notes={notes} setNotes={setNotes} note={note} />)}</div>;
};

export default NoteList
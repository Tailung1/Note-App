import { useState } from "react";
import AddNote from "./components/addNote";

 export interface INote {
  title: string;
  content: string;
}
function App() {
  const [notes, setNotes] = useState<INote[]>([]);
  return (
    <>
      <AddNote notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;

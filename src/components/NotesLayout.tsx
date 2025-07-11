import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";
import { Note } from "../App";

type NoteLayoutProps = {
  notes: Note[];
};

export default function NotesLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
}


export function useNote() {
    return useOutletContext<Note>()
}
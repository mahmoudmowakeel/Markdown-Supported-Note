import { NoteData, Tag } from "../App";
import NoteForm from "./NoteForm";

type NewNodeProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export default function NewNode({ onSubmit, onAddTag, availableTags }: NewNodeProps) {
  return (
    <div>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </div>
  );
}

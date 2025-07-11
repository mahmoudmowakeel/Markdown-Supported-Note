import { Badge, Card, Stack } from "react-bootstrap";
import { Tag } from "../App";
import { Link } from "react-router-dom";
import styles from "../NotesList.module.css";

type SimplfiedNote = {
  id: string;
  title: string;
  tags: Tag[];
};

export default function NoteCard({ id, title, tags }: SimplfiedNote) {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
           <span className="fs-5">{title}</span>
           {tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="justify-content-center flex-wrap">
                {tags.map(tag=> (
                    <Badge className="text-truncate" key={tag.id}>{tag.label}</Badge>
                ))}
            </Stack>
           )} 
        </Stack>
      </Card.Body>
    </Card>
  );
}

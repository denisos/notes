import { v4 as uuid } from "uuid";

const NOTES = new Map();

export function getNotes() {
  return Array.from(NOTES.values());
}

export function getNote(id) {
  return NOTES.get(id);
}

export function createNote({ title, body }) {
  const id = uuid();
  const lastEdited = Date.now();
  const note = {
    id,
    lastEdited,
    title,
    body
  };
  NOTES.set(id, note);

  return {...note};
}

export function updateNote(id, { title, body }) {
  const note = NOTES.get(id);
  if (!note) {
    return null;
  }

  note.title = title ?? note.title;
  note.body = body ?? note.body;
  note.lastEdited = Date.now();

  return {...note};
}

export function deleteNote(id) {
  return NOTES.delete(id);
}

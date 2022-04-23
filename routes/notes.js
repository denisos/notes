import { createNote, deleteNote as deleteModelNote, getNote, getNotes, updateNote } from '../models/note.js';

const validSorts = ["asc", "desc"];

export function list(req, res) {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc";
  console.log({sort})

  if (! validSorts.includes(sort.toLowerCase())) {
    return res.status(400).send("invalid sort")
  }

  const notes = getNotes(sort);
  res.json({ notes });
}

export function create(req, res) {
  const { title, body } = req.body;
  if (!title || !body ) {
    return res.status(400).send("Title and body required");
  }
  console.log(`title ${title} and body ${body} received`);

  const newNote = createNote({ title, body });

  console.log(newNote);

  res.send(newNote);
}

export function read(req, res) {
  const { id } = req.params;

  const note = getNote(id);
  if (!note) {
    return res.status(404);
  }
  res.json({ note });
}

export function update(req, res) {
  const { id } = req.params;
  const { title, body } = req.body;

  console.log(`updating ${id} with ${title} and ${body}`);

  const newNote = updateNote(id, { title, body });

  console.log({ newNote });

  res.send(newNote);
}

export function deleteNote(req, res) {
  const { id } = req.params;
  console.log(`deleting ${id}`);
  const success = deleteModelNote(id);
  res.send("ok");
}

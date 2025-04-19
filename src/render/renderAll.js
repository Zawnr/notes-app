import { notesData } from '../data/notes.js';

const renderAll = (query = "") => {
  const notesList = document.getElementById("notes-list");
  const archivedList = document.getElementById("archived-list");

  notesList.notes = notesData.filter(n =>
    !n.archived && n.title.toLowerCase().includes(query.toLowerCase())
  );

  archivedList.notes = notesData.filter(n =>
    n.archived && n.title.toLowerCase().includes(query.toLowerCase())
  );
};

export default renderAll;

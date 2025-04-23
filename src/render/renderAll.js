import { fetchNotes, fetchArchivedNotes } from '../api/notesApi.js';

const renderAll = async (keyword = '') => {
  const activeNotesContainer = document.querySelector('#notes-list');
  const archivedNotesContainer = document.querySelector('#archived-list');

  activeNotesContainer.innerHTML = '<p>Loading catatan aktif...</p>';
  archivedNotesContainer.innerHTML = '<p>Loading catatan arsip...</p>';

  try {
    const [activeNotes, archivedNotes] = await Promise.all([
      fetchNotes(),
      fetchArchivedNotes()
    ]);

    // search
    const filterByKeyword = (notes) => notes.filter(note =>
      note.title.toLowerCase().includes(keyword.toLowerCase()) ||
      note.body.toLowerCase().includes(keyword.toLowerCase())
    );

    const filteredActiveNotes = filterByKeyword(activeNotes);
    const filteredArchivedNotes = filterByKeyword(archivedNotes);

    // Render catatan aktif
    if (filteredActiveNotes.length === 0) {
      activeNotesContainer.innerHTML = '<p>Tidak ada catatan aktif.</p>';
    } else {
      activeNotesContainer.innerHTML = '';
      filteredActiveNotes.forEach(note => {
        const noteElement = document.createElement('note-item');
        noteElement.note = note;
        activeNotesContainer.appendChild(noteElement);
      });
    }

    // Render catatan arsip
    if (filteredArchivedNotes.length === 0) {
      archivedNotesContainer.innerHTML = '<p>Tidak ada catatan arsip.</p>';
    } else {
      archivedNotesContainer.innerHTML = '';
      filteredArchivedNotes.forEach(note => {
        const noteElement = document.createElement('note-item');
        noteElement.note = note;
        archivedNotesContainer.appendChild(noteElement);
      });
    }

  } catch (error) {
    activeNotesContainer.innerHTML = '<p>Gagal memuat catatan aktif.</p>';
    archivedNotesContainer.innerHTML = '<p>Gagal memuat catatan arsip.</p>';
    console.error(error);
  }
};

export default renderAll;

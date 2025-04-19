import renderAll from '../render/renderAll.js';

const initNoteForm = () => {
  window.addEventListener("note-changed", () => {
    const searchInput = document.getElementById("search-notes");
    renderAll(searchInput.value);
  });
};

export default initNoteForm;

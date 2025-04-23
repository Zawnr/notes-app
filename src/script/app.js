import initSearch from '../handlers/initSearch.js';
import initNoteForm from '../handlers/initNoteForm.js';
import renderAll from '../render/renderAll.js';

const runApp = () => {
  initSearch();
  initNoteForm();
  renderAll();

  window.addEventListener('note-changed', () => {
    renderAll();
  });
};

export default runApp; 

import renderAll from '../render/renderAll.js';

const initSearch = () => {
  const searchInput = document.getElementById("search-notes");

  searchInput.addEventListener("input", (e) => {
    renderAll(e.target.value);
  });
};

export default initSearch;

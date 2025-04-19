import { notesData } from "../src/data/notes.js";

class NoteForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <form id="note-form">
          <input type="text" id="note-title" placeholder="Judul catatan" required />
          <textarea id="note-body" placeholder="Isi catatan" required></textarea>
          <button type="submit">Tambah Catatan</button>
        </form>
      `;

    this.querySelector("#note-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const title = this.querySelector("#note-title").value.trim();
      const body = this.querySelector("#note-body").value.trim();

      if (title && body) {
        notesData.unshift({
          id: `notes-${+new Date()}`,
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        });

        this.querySelector("#note-form").reset();
        window.dispatchEvent(new Event("note-changed"));
      }
    });
  }
}

customElements.define("note-form", NoteForm);

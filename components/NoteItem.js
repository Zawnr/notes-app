import { notesData } from "../src/data/notes.js";

class NoteItem extends HTMLElement {
  set note(value) {
    this._note = value;
    this.render();
  }

  render() {
    const { title, body, createdAt, archived, id } = this._note;
    const formatDate = (dateStr) =>
      new Date(dateStr).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    this.innerHTML = `
        <div class="note ${archived ? "archived" : ""}">
          <h3>${title}</h3>
          <p>${body}</p>
          <small>${formatDate(createdAt)}</small><br>
          <button id="toggle">${archived ? "Kembalikan" : "Arsipkan"}</button>
        </div>
      `;

    this.querySelector("#toggle").addEventListener("click", () => {
      const targetNote = notesData.find((n) => n.id === id);
      targetNote.archived = !targetNote.archived;
      window.dispatchEvent(new Event("note-changed"));
    });
  }
}

customElements.define("note-item", NoteItem);

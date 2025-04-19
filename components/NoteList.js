class NoteList extends HTMLElement {
  set notes(value) {
    this._notes = value;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._notes.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.note = note;
      this.appendChild(noteItem);
    });
  }
}

customElements.define("note-list", NoteList);

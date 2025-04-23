import { archiveNote, unarchiveNote, deleteNote } from "../src/api/notesApi.js";

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
        <button id="delete">Hapus</button>
      </div>
    `;
    

    this.querySelector("#toggle").addEventListener("click", async () => {
      try {
        if (archived) {
          await unarchiveNote(id);
        } else {
          await archiveNote(id);
        }

        // Refresh daftar catatan
        window.dispatchEvent(new Event("note-changed"));
      } catch (error) {
        console.error("Gagal mengubah status arsip:", error);
      }
    });

    this.querySelector("#delete").addEventListener("click", async () => {
  const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
  if (!konfirmasi) return;

  try {
    await deleteNote(id);
    alert("Catatan berhasil dihapus.");
    window.dispatchEvent(new Event("note-changed"));
  } catch (error) {
    console.error("Gagal menghapus catatan:", error);
    alert("Gagal menghapus catatan. Coba lagi.");
  }
});


  }
}

customElements.define("note-item", NoteItem);

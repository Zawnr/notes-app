import { createNote } from "../src/api/notesApi.js"; 
import Swal from 'sweetalert2';

class NoteForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <form id="note-form">
          <input type="text" id="note-title" placeholder="Judul catatan" required />
          <div id="title-error" style="color: red; font-size: 12px;"></div>
          
          <textarea id="note-body" placeholder="Isi catatan" required></textarea>
          <div id="body-error" style="color: red; font-size: 12px;"></div>
          
          <button type="submit" id="submit-btn" disabled>Tambah Catatan</button>
        </form>
      `;
      
    const titleInput = this.querySelector("#note-title");
    const bodyInput = this.querySelector("#note-body");
    const submitButton = this.querySelector("#submit-btn");

    titleInput.addEventListener("input", this.validateForm.bind(this));
    bodyInput.addEventListener("input", this.validateForm.bind(this));

    this.querySelector("#note-form").addEventListener("submit", this.handleSubmit.bind(this));
  }

  validateForm() {
    const title = this.querySelector("#note-title").value.trim();
    const body = this.querySelector("#note-body").value.trim();
    let isValid = true;

    // Validasi judul
    if (!title) {
      this.querySelector("#title-error").textContent = "Judul catatan wajib diisi!";
      isValid = false;
    } else {
      this.querySelector("#title-error").textContent = "";
    }

    // Validasi deskripsi
    if (!body) {
      this.querySelector("#body-error").textContent = "Isi catatan wajib diisi!";
      isValid = false;
    } else {
      this.querySelector("#body-error").textContent = "";
    }

    // Mengaktifkan atau menonaktifkan tombol submit
    this.querySelector("#submit-btn").disabled = !isValid;
  }

  async handleSubmit(event) {
    event.preventDefault();

    const title = this.querySelector("#note-title").value.trim();
    const body = this.querySelector("#note-body").value.trim();

    if (title && body) {
      try {
        Swal.fire({
          title: 'Menyimpan catatan...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        await createNote(title, body);

        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Catatan berhasil ditambahkan!',
          showConfirmButton: false,
          timer: 1500,
        });

        this.querySelector("#note-form").reset();
        window.dispatchEvent(new Event("note-changed")); // trigger renderAll
      } catch (error) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Gagal menambahkan catatan',
          text: 'Terjadi kesalahan. Silakan coba lagi.',
        });
        console.error("Gagal menambahkan catatan:", error);
      }
    }
  }
}

customElements.define("note-form", NoteForm);

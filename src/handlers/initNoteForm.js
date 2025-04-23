import Swal from 'sweetalert2';

const initNoteForm = () => {
  const noteForm = document.querySelector('note-form');
  if (!noteForm) {
    console.error('Form not found!');
    return;
  }

  const form = noteForm.querySelector('#note-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = form.querySelector('#note-title').value.trim();
    const body = form.querySelector('#note-body').value.trim();

    if (!title || !body) {
      Swal.fire({
        icon: 'warning',
        title: 'Form tidak lengkap',
        text: 'Judul dan isi catatan harus diisi!',
      });
      return;
    }

    // Tampilkan loading SweetAlert
    Swal.fire({
      title: 'Menyimpan catatan...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

  });
};

export default initNoteForm;

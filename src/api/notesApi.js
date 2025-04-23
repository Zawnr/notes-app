const BASE_URL = 'https://notes-api.dicoding.dev/v2';

// Ambil semua catatan aktif (tidak diarsipkan)
export const fetchNotes = async () => {
  const response = await fetch(`${BASE_URL}/notes`);
  if (!response.ok) {
    throw new Error('Gagal mengambil catatan');
  }
  const result = await response.json();
  return result.data;
};

// Ambil semua catatan yang sudah diarsipkan
export const fetchArchivedNotes = async () => {
  const response = await fetch(`${BASE_URL}/notes/archived`);
  if (!response.ok) {
    throw new Error('Gagal mengambil catatan arsip');
  }
  const result = await response.json();
  return result.data;
};

// Tambahkan catatan baru
export const createNote = async (title, body) => {
  const response = await fetch(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  });

  if (!response.ok) {
    throw new Error('Gagal membuat catatan');
  }

  const result = await response.json();
  return result.data;
};

// Arsipkan catatan
export const archiveNote = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Gagal mengarsipkan catatan');
  }

  return await response.json();
};

// Kembalikan catatan dari arsip
export const unarchiveNote = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Gagal mengembalikan catatan dari arsip');
  }

  return await response.json();
};

// Hapus catatan
export const deleteNote = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Gagal menghapus catatan');
  }

  return await response.json();
};

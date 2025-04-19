// // export default function main() {
// //   const baseURL = "https://notes-api.dicoding.dev/v2/";

// //   // Create Note
// //   const insertNote = async() => {
// //     try {
      
// //     } catch (error) {
      
// //     }
// //   };

// //   // menampilkan catatan non-archived
// //   const getNotes = async() => {
// //     try {
// //       const response = await fetch(`${baseURL}/notes`);
// //       const responseJson = await response.json();

// //       if (responseJson.status === "success") {
// //         const nonArchivedNotes = responseJson.data.filter(
// //           (note) => !note.archived,
// //         );
// //         const notesListElement = document.getElementById("notes-list");
// //         notesListElement.notes = nonArchivedNotes;
// //         return nonArchivedNotes;
// //       } else {
// //         showResponseMessage(responseJson);
// //         throw new Error(responseJson.message);
// //       }
// //     } catch (error) {
// //       showResponseMessage();
// //       return [];
// //     }
// //   };

// //   // Get Archived Notes
// //   const getArchivedNotes = async() => {
// //     try {
      
// //     } catch (error) {
      
// //     }
// //   }

// //   // Get single Notes
// //   const getSingleNotes = async() => {
// //     try {
      
// //     } catch (error) {
      
// //     }
// //   }

// //   // Post archived Notes = mengubah status notes ke catatan arsip
// //   const archivedNote = async() => {
// //     try {
      
// //     } catch (error) {
      
// //     }
// //   }

// //   // Post unarchived Notes = mengubah status notes ke catatan aktif
// //   const unarchivedNote =async() => {
// //     try {
      
// //     } catch (error) {
      
// //     }
// //   }

// //   // Delete Note
// //   const deleteNote = async() => {
// //     try {
      
// //     } catch (error) {
      
// //     }
// //   }





// //   // Fungsi untuk menampilkan pesan error
// //   const showResponseMessage = (responseJson) => {
// //     const message = responseJson?.message || "Catatan tidak ditemukan";
// //     alert(message);
// //   };
// // }

// // // export default main;


// // // import renderAll from './render/renderAll.js';

// // // const getNotes = async () => {
// // //   try {
// // //     const response = await fetch(`${baseURL}/notes`);
// // //     const responseJson = await response.json();

// // //     if (responseJson.status === "success") {
// // //       const nonArchivedNotes = responseJson.data.filter(note => !note.archived);
// // //       renderAll(nonArchivedNotes); // langsung render di sini
// // //       return nonArchivedNotes;
// // //     } else {
// // //       throw new Error(responseJson.message);
// // //     }
// // //   } catch (error) {
// // //     console.error("Fetch Error:", error);
// // //     return [];
// // //   }
// // // };

// // // export default async function main() {
// // //   await getNotes();
// // // }

// // src/api/notesApi.js
// const BASE_URL = "https://notes-api.dicoding.dev/v2";

// export const getNotes = async () => {
//   const response = await fetch(`${BASE_URL}/notes`);
//   const result = await response.json();
//   return result.data;
// };

// export const createNote = async (title, body) => {
//   const response = await fetch(`${BASE_URL}/notes`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title, body }),
//   });
//   const result = await response.json();
//   return result.data;
// };

// export const archiveNote = async (id) => {
//   await fetch(`${BASE_URL}/notes/${id}/archive`, {
//     method: "POST",
//   });
// };

// export const unarchiveNote = async (id) => {
//   await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
//     method: "POST",
//   });
// };

// export const deleteNote = async (id) => {
//   await fetch(`${BASE_URL}/notes/${id}`, {
//     method: "DELETE",
//   });
// };


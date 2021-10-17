import {db} from '../firebase/firebase-config';
import {collection, addDoc, updateDoc, doc} from "firebase/firestore";
import {types} from "../types/types";
import {loadNotes} from "../helpers/loadNotes";
import Swal from "sweetalert2";

export const starNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote)

    dispatch(activeNote(doc.id, newNote))


  }
}


export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})


export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid)
    dispatch(setNote(notes))

  }
}

export const setNote = (notes) => ({
  type: types.notesLoad,
  payload: notes
})

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    const noteToFirestore = {...note}

    delete noteToFirestore.id
    if (!note.url) {
      delete noteToFirestore.url
    }

    const docRef = doc(db, `${uid}/journal/notes/${note.id}`);
    await updateDoc(docRef, noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore))
    Swal.fire('Saved', note.title, 'success')
  }
}


export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})

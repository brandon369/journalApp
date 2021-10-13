import {db} from '../firebase/firebase-config';
import {collection, getDocs} from "firebase/firestore";

export const loadNotes = async (uid) => {
  const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`));
  const notes = []
  notesSnap.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    notes.push({
      id: doc.id,
      ...doc.data()
    })
  });
  return notes
}

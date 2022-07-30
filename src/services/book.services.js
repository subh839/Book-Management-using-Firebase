
import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");
class BookDataService {
    //adding books
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };
// update 
  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    // check exist or not 
    return updateDoc(bookDoc, updatedBook);
  };
//del
  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };
// get books 
  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };
//get info individual 
  getBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

export default new BookDataService();
import { db } from '../firebase/config.js';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

async function cleanDuplicates() {
  const snapshot = await getDocs(collection(db, "restaurantes"));
  const seen = new Set();
  const duplicates = [];

  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const key = data.nombre?.toLowerCase().trim();
    if (seen.has(key)) {
      duplicates.push(docSnap.id);
    } else {
      seen.add(key);
    }
  });

  for (const id of duplicates) {
    await deleteDoc(doc(db, "restaurantes", id));
    console.log(`Restaurante duplicado eliminado: ${id}`);
  }

  console.log(`Eliminados ${duplicates.length} duplicados.`);
}

cleanDuplicates();
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Mismas credenciales que ariabodas-admin — el landing SOLO lee datos
// públicos (bodas activas y destacadas), nunca escribe nada aquí.
const firebaseConfig = {
  apiKey: 'AIzaSyApppfMcuD1t_CoILDecwK7DnMHp89g2E4',
  authDomain: 'ariabodas-admin.firebaseapp.com',
  projectId: 'ariabodas-admin',
  storageBucket: 'ariabodas-admin.firebasestorage.app',
  messagingSenderId: '725357936875',
  appId: '1:725357936875:web:788cf3eaf2ca35d165feae',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
    import { 
         getFirestore,
         collection, 
         addDoc,
         getDocs,
         onSnapshot,
         deleteDoc,
         doc,
         getDoc,
         updateDoc,
         } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyC0flzTf3mLheV5rRtz2i2kDWk4AIYRALQ",
      authDomain: "fir-js-crud-b0944.firebaseapp.com",
      projectId: "fir-js-crud-b0944",
      storageBucket: "fir-js-crud-b0944.appspot.com",
      messagingSenderId: "459796945295",
      appId: "1:459796945295:web:dad6c32c770706541bd3fa"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore()
    //conecção da base de dados 

    export  const saveTask = (title, description) => 
        addDoc(collection(db, 'tasks'), {title, description})
    //Quando me passes um titulo e uma descrição, vamos guardar um documento, dentro da coleção de tarefas e vamso passar um objeto que vai estar formado por um título e uma descrição. A função addDoc gera por nós um id em cada nota.

    export const getTasks = () => getDocs(collection(db, 'tasks'))

    export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

    export const deleteTask = id => deleteDoc(doc(db, 'tasks', id))
    // (db, 'tasks') isso é o que vai buscar e id é o que vai eliminar

    export const getTask = id => getDoc(doc(db, 'tasks', id))


    export const updateTask = (id, newFields) => 
    updateDoc(doc(db, 'tasks', id), newFields )
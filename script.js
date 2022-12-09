 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBy__UYPtYjLPI867Rb5dir03SB9KmTAL4",
   authDomain: "devede-27205.firebaseapp.com",
   projectId: "devede-27205",
   storageBucket: "devede-27205.appspot.com",
   messagingSenderId: "905513568571",
   appId: "1:905513568571:web:77c55b1e956f7e45db4f1e"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 const inputTitle = document.querySelector('#title');
 const inputGenre = document.querySelector('#genre');
 const inputYear = document.querySelector('#year');
 const buttonMovie = document.querySelector('#seek-movie');

 const movieList = document.querySelector('#movieList');

 async function saveToDataBase(titleItem, genreItem, yearItem) {
    try {
        await addDoc(collection(db, 'devede'), {
            title: titleItem,
            genre: genreItem,
            year: yearItem
        });
    } catch (error) {
        console.log('ERROR', error)
    }
 }

 async function removeFromDataBase(movieId) {
    try {
        await deleteDoc(doc(db, 'devede', movieId));


    } catch (error) {
        
    }
 }

function addClickEvent() {
    const movieElems = document.querySelectorAll('li');

    movieElems.forEach((movieList) => {
        movieList.addEventListener('click', (event) => {
            const movieId = event.target.getAttribute('data-movie-id');

            removeFromDataBase(movieId)
        })
    })
}


 buttonMovie.addEventListener('click', () => {
   console.log('click')
   const titleItem = inputTitle.value;
   const genreItem = inputGenre.value;
   const yearItem = inputYear.value;
   console.log(titleItem)

   saveToDataBase(titleItem, genreItem, yearItem)

 })

 async function showMovies() {
    const movies = await getDocs(collection(db, 'devede'));
    

    movies.forEach((movie) => {
        const elem = `
        <li data-movie-id="${movie.id}"><u>Title:</u> ${movie.data().title}<br>
        <u>Genre:</u> ${movie.data().genre}<br>
        <u>Year:</u> ${movie.data().year}
        </i>
        `

        movieList.insertAdjacentHTML('beforeend', elem)
    })

    addClickEvent();
 }

 showMovies();
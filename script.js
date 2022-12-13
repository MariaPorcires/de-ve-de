import { saveToDataBase, checkMovieTitle, showMovies } from "./modules/movies.js";

/*
// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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
*/

 const inputTitle = document.querySelector('#title');
 const inputGenre = document.querySelector('#genre');
 const inputYear = document.querySelector('#year');
 const buttonMovie = document.querySelector('#add');
 const inputSearch = document.querySelector('#search-movie');
 //const movieList = document.querySelector('#movieList');

 /*async function saveToDataBase(titleItem, genreItem, yearItem) {
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
*/

 /*async function removeFromDataBase(movieId) {
    try {
        await deleteDoc(doc(db, 'devede', movieId));


    } catch (error) {
        
    }
 }

 function removeClick() {
    const deleteBtn = document.querySelectorAll('#deleteBtn')

    deleteBtn.forEach((remove) => {
       remove.addEventListener('click', async (event) => {
         
               const movieId = event.target.getAttribute('data-movie-id');
               
               await removeFromDataBase(movieId)
               showMovies()  
       })
   })
  
 }
 */

 buttonMovie.addEventListener('click', () => {
   const titleItem = inputTitle.value;
   const genreItem = inputGenre.value;
   const yearItem = inputYear.value;

   saveToDataBase(titleItem, genreItem, yearItem)
   inputTitle.value = "";
   inputGenre.value = "";
   inputYear.value = "";

   showMovies()
   
 })

/*async function checkMovieTitle() {
    const searchTitle = inputSearch.value;
    console.log(searchTitle)
    try {
        const titleQuery = query(collection(db, 'devede'), where('title', '==', searchTitle));
        const result = await getDocs(titleQuery);
        let resultMovie;
        
        result.forEach((movie) => {
            resultMovie = title;
            const elem=`
            <br><li data-movie-id="${movie.id}"> ${movie.data().title} 
            / ${movie.data().genre} 
            / ${movie.data().year}
            
            </li>`

            movieList.insertAdjacentHTML('beforeend', elem)

        });

    } catch (error) {
        
    }
}
*/
//const inputSearch = document.querySelector('#search-movie');
const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', async () => {        
    await checkMovieTitle()
    inputSearch.value = "";
})

 /*async function showMovies() {
 
    const movies = await getDocs(collection(db, 'devede'));
    movieList.innerHTML ="";

    movies.forEach((movie) => {
        const elem = `
        <br>
        <li "${movie.id}"> ${movie.data().title} 
        / ${movie.data().genre} 
        / ${movie.data().year}<br>
        <button data-movie-id=${movie.id} id="deleteBtn">Remove</button>
        <br>
        </li>
        `

        movieList.insertAdjacentHTML('beforeend', elem)
    })


    removeClick()
 }

 showMovies();
*/

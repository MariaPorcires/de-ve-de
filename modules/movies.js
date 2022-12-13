import { db, collection, addDoc, getDocs, 
    query, where, doc, deleteDoc } from './firebase.js';

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

     const movieList = document.querySelector('#movieList');

     async function showMovies() {
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

     async function removeFromDataBase(movieId) {
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

     const inputSearch = document.querySelector('#search-movie');

     async function checkMovieTitle() {
        const searchTitle = inputSearch.value;
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
                </li>
                `
            
                movieList.insertAdjacentHTML('beforeend', elem)
            });
    
        } catch (error) {
            
        }
    }

    export { saveToDataBase, checkMovieTitle, showMovies }
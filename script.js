// Här hämtar jag de flesta av mina HTML-element. 
// Koden blir tydlig och lättare att följa, man får en överblick över vad som finns på min DOM.

import { saveToDataBase, checkMovieTitle, showMovies } from "./modules/movies.js";


 const inputTitle = document.querySelector('#title');
 const inputGenre = document.querySelector('#genre');
 const inputYear = document.querySelector('#year');
 const buttonMovie = document.querySelector('#add');
 const inputSearch = document.querySelector('#search-movie');

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

const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', async () => {        
    await checkMovieTitle()
    inputSearch.value = "";
})


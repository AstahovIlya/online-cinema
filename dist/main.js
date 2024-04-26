/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nlet nextPage = 2;\r\nlet isLoading = false;\r\nlet shouldLoad = true;\r\n\r\ndocument.addEventListener('DOMContentLoaded', async function () {\r\n   if (document.querySelector('.gallery')) {\r\n      appendPoster(await getMoviesHomePage());\r\n      window.addEventListener('scroll', getPositionScroll)\r\n   }\r\n   if (document.querySelector('.movie')) {\r\n      createMovieDescription(await getMovieByID(localStorage.getItem('IDMovie')));\r\n   }\r\n})\r\n\r\nasync function getMoviesHomePage() {\r\n   if (isLoading || !shouldLoad) return;\r\n\r\n   isLoading = true;\r\n\r\n   const options = {\r\n      method: 'GET',\r\n      headers: { accept: 'application/json', 'X-API-KEY': '0RQE1Z7-2JWM5G1-QDPJPBX-FETDS88' }\r\n   }\r\n   let urlSearch = `https://api.kinopoisk.dev/v1.4/movie?page=${nextPage}&limit=10&type=movie`;\r\n\r\n   let response = await fetch(urlSearch, options);\r\n\r\n   nextPage++;\r\n\r\n   let data = await response.json();\r\n   let movies = data.docs;\r\n\r\n   if (nextPage > data.pages) shouldLoad = false;\r\n   isLoading = false;\r\n\r\n   return movies;\r\n}\r\n\r\nasync function getMovieByID(id) {\r\n   const options = {\r\n      method: 'GET',\r\n      headers: { accept: 'application/json', 'X-API-KEY': '0RQE1Z7-2JWM5G1-QDPJPBX-FETDS88' }\r\n   }\r\n   let urlSearch = `https://api.kinopoisk.dev/v1.4/movie/${id}`;\r\n\r\n   let response = await fetch(urlSearch, options);\r\n\r\n   return await response.json();\r\n}\r\n\r\nfunction createMovieDescription(movie) {\r\n   console.log(movie)\r\n   document.querySelector('h2').textContent = movie.name;\r\n   document.querySelector('.duration').firstElementChild.textContent = `${movie.movieLength} мин.`;\r\n   document.querySelector('.rating').firstElementChild.textContent = movie.rating.imdb;\r\n   document.querySelector('.country').firstElementChild.textContent = movie.countries[0].name;\r\n   document.querySelector('.producer').firstElementChild.textContent = getProduser(movie.persons);\r\n\r\n   function getProduser(people) {\r\n      for (let humen of people) {\r\n         if (humen.profession == 'режиссеры') {\r\n            console.log(humen)\r\n            return humen.name;\r\n         }\r\n      }\r\n   }\r\n}\r\n\r\nfunction getAllKategories(categories) {\r\n   let categorys = [];\r\n   for (let category of categories) {\r\n      categorys.push(category.name);\r\n   }\r\n   return categorys.join(', ');\r\n}\r\n\r\nasync function getPositionScroll() {\r\n   let heightDocument = Math.max(\r\n      document.body.scrollHeight, document.documentElement.scrollHeight,\r\n      document.body.offsetHeight, document.documentElement.offsetHeight,\r\n      document.body.clientHeight, document.documentElement.clientHeight\r\n   );\r\n   let heightScroll = window.innerHeight;\r\n\r\n   let startEvent = heightDocument * 0.7;\r\n\r\n   let position = heightScroll + window.scrollY;\r\n\r\n   if (position >= startEvent) {\r\n      appendPoster(await getMoviesHomePage());\r\n   }\r\n}\r\n\r\nfunction appendPoster(collectionMovies) {\r\n   if (!collectionMovies) return;\r\n\r\n   let gallery = document.querySelector('.gallery');\r\n\r\n   for (let movie of collectionMovies) {\r\n      gallery.appendChild(createMovie(movie))\r\n   }\r\n}\r\n\r\nfunction createMovie(movieData) {\r\n   if (!movieData) return;\r\n\r\n   let template = document.querySelector('.gallery-template');\r\n\r\n   let moviePoster = template.content.cloneNode(true);\r\n   let linkMovie = moviePoster.querySelector('a');\r\n\r\n   moviePoster.querySelector('img:first-child').src = movieData.poster.previewUrl;\r\n   linkMovie.textContent = movieData.name;\r\n   linkMovie.id = movieData.id;\r\n   linkMovie.addEventListener('click', function () {\r\n      localStorage.setItem('IDMovie', linkMovie.id)\r\n   });\r\n   moviePoster.querySelector('p').textContent = getAllKategories(movieData.genres);\r\n   moviePoster.querySelector('#imdb').textContent = movieData.rating.imdb;\r\n   moviePoster.querySelector('#year').textContent = movieData.year;\r\n\r\n   return moviePoster;\r\n}\n\n//# sourceURL=webpack://working-file/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
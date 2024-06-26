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

eval("__webpack_require__.r(__webpack_exports__);\n\r\nlet nextPage = 1;\r\nlet isLoading = false;\r\nlet shouldLoad = true;\r\n\r\ndocument.addEventListener('DOMContentLoaded', async function () {\r\n   let menu = getLinksMenu('.menu');\r\n   if (document.querySelector('.gallery')) {\r\n      appendPoster(await getMoviesHomePage(localStorage.getItem('type') || 'movie'));\r\n      window.addEventListener('scroll', function () {\r\n         getPositionScroll(localStorage.getItem('type'))\r\n      })\r\n   }\r\n   if (document.querySelector('.movie')) {\r\n      createMovieDescription(await getMovieByID(localStorage.getItem('IDMovie') || 'movie'));\r\n   }\r\n   getTypeFilm(menu);\r\n   setActiveLink(menu);\r\n})\r\n\r\nlet search = document.querySelector('.search');\r\n\r\nsearch.firstElementChild.addEventListener('change', async function () {\r\n   clearGallery('.gallery');\r\n   appendPoster(await getMovieByName(this.value));\r\n})\r\n\r\nsearch.lastElementChild.addEventListener('click', async function () {\r\n   clearGallery('.gallery');\r\n   appendPoster(await getMovieByName(search.firstElementChild.value));\r\n})\r\n\r\nasync function getMoviesHomePage(type = 'movie') {\r\n   if (isLoading || !shouldLoad) return;\r\n\r\n   isLoading = true;\r\n\r\n   const options = {\r\n      method: 'GET',\r\n      headers: { accept: 'application/json', 'X-API-KEY': '0RQE1Z7-2JWM5G1-QDPJPBX-FETDS88' }\r\n   }\r\n\r\n   let urlSearch = `https://api.kinopoisk.dev/v1.4/movie?page=${nextPage}&limit=10&type=${type}&rating.kp=1-10&notNullFields=videos.trailers.url`;\r\n\r\n\r\n   let response = await fetch(urlSearch, options);\r\n\r\n   nextPage++;\r\n\r\n   let data = await response.json();\r\n   let movies = data.docs;\r\n\r\n   if (nextPage > data.pages) shouldLoad = false;\r\n   isLoading = false;\r\n\r\n   return movies;\r\n}\r\n\r\nasync function getMovieByID(id) {\r\n   const options = {\r\n      method: 'GET',\r\n      headers: { accept: 'application/json', 'X-API-KEY': '0RQE1Z7-2JWM5G1-QDPJPBX-FETDS88' }\r\n   }\r\n   let urlSearch = `https://api.kinopoisk.dev/v1.4/movie/${id}`;\r\n\r\n   let response = await fetch(urlSearch, options);\r\n\r\n   return await response.json();\r\n}\r\n\r\nfunction createMovieDescription(movie) {\r\n   document.querySelector('h2').textContent = movie.name;\r\n   if (movie.type == 'tv-series') {\r\n      document.querySelector('.duration').firstElementChild.textContent = `${movie.seriesLength} мин.`;\r\n   } else {\r\n      document.querySelector('.duration').firstElementChild.textContent = `${movie.movieLength} мин.`;\r\n   }\r\n   document.querySelector('.rating').firstElementChild.textContent = movie.rating.kp.toFixed(1);\r\n   document.querySelector('.country').firstElementChild.textContent = movie.countries[0].name;\r\n   document.querySelector('.producer').firstElementChild.textContent = getProduser(movie.persons);\r\n   document.querySelector('iframe').src = movie.videos.trailers[0].url;\r\n\r\n   function getProduser(people) {\r\n      for (let humen of people) {\r\n         if (humen.profession == 'режиссеры') {\r\n            return humen.name;\r\n         }\r\n      }\r\n   }\r\n}\r\n\r\nfunction getAllKategories(categories) {\r\n   if (!categories) return \"\";\r\n   let categorys = [];\r\n   for (let category of categories) {\r\n      categorys.push(category.name);\r\n   }\r\n   return categorys.join(', ');\r\n}\r\n\r\nasync function getPositionScroll(type) {\r\n   let heightDocument = Math.max(\r\n      document.body.scrollHeight, document.documentElement.scrollHeight,\r\n      document.body.offsetHeight, document.documentElement.offsetHeight,\r\n      document.body.clientHeight, document.documentElement.clientHeight\r\n   );\r\n   let heightScroll = window.innerHeight;\r\n\r\n   let startEvent = heightDocument * 0.7;\r\n\r\n   let position = heightScroll + window.scrollY;\r\n\r\n   if (position >= startEvent) {\r\n      appendPoster(await getMoviesHomePage(type));\r\n   }\r\n}\r\n\r\nfunction appendPoster(collectionMovies) {\r\n   if (!collectionMovies) return;\r\n\r\n   let gallery = document.querySelector('.gallery');\r\n\r\n   for (let movie of collectionMovies) {\r\n      gallery.appendChild(createMovie(movie))\r\n   }\r\n}\r\n\r\nfunction createMovie(movieData) {\r\n   if (!movieData) return;\r\n\r\n   let template = document.querySelector('.gallery-template');\r\n\r\n   let moviePoster = template.content.cloneNode(true);\r\n   let linkMovie = moviePoster.querySelector('a');\r\n\r\n   if (movieData.poster) {\r\n      moviePoster.querySelector('img:first-child').src = movieData.poster.previewUrl;\r\n   } else {\r\n      moviePoster.querySelector('img:first-child').src = './img/not-poster.jpg';\r\n   }\r\n\r\n   linkMovie.textContent = movieData.name;\r\n   linkMovie.id = movieData.id;\r\n   linkMovie.addEventListener('click', function () {\r\n      localStorage.setItem('IDMovie', linkMovie.id)\r\n   });\r\n   moviePoster.querySelector('p').textContent = getAllKategories(movieData.genres);\r\n   moviePoster.querySelector('#imdb').textContent = movieData.rating.kp.toFixed(1);\r\n   moviePoster.querySelector('#year').textContent = movieData.year;\r\n\r\n   return moviePoster;\r\n}\r\n\r\nfunction getLinksMenu(selectorMenu) {\r\n   let menu = document.querySelector(selectorMenu);\r\n   return menu.querySelectorAll('a');\r\n}\r\n\r\nfunction getTypeFilm(linksMenu) {\r\n   for (let link of linksMenu) {\r\n      link.addEventListener('click', function () {\r\n         localStorage.setItem('type', this.id);\r\n      })\r\n   }\r\n}\r\n\r\nfunction setActiveLink(linksMenu) {\r\n   for (let link of linksMenu) {\r\n      link.dataset.active = false;\r\n      if (link.id == localStorage.getItem('type')) {\r\n         link.dataset.active = true;\r\n      }\r\n   }\r\n}\r\n\r\nfunction getEnding(num) {\r\n   if (num == 1) {\r\n      return\r\n   } else if (num > 1 && num < 5) {\r\n      return 'а';\r\n   } else {\r\n      return 'ов';\r\n   }\r\n}\r\n\r\nasync function getMovieByName(nameMovie) {\r\n   const options = {\r\n      method: 'GET',\r\n      headers: { accept: 'application/json', 'X-API-KEY': '0RQE1Z7-2JWM5G1-QDPJPBX-FETDS88' }\r\n   }\r\n\r\n   let urlSearch = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=250&query=${nameMovie}`;\r\n\r\n\r\n   let response = await fetch(urlSearch, options);\r\n\r\n   nextPage++;\r\n\r\n   let data = await response.json();\r\n   return data.docs;\r\n}\r\n\r\nfunction clearGallery(selectorGallery) {\r\n   let gallery = document.querySelector(selectorGallery);\r\n   let posters = gallery.querySelectorAll('.poster');\r\n   for (let poster of posters) {\r\n      poster.remove()\r\n   }\r\n}\r\n\n\n//# sourceURL=webpack://working-file/./src/script.js?");

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
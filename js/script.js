//89b065f503c852471b7275e86922c78e   api key

//to build routers to different pages need to find out the path to that page with console.log(window.location.pathname)

const global ={
    currentPage: window.location.pathname
}
//console.log(global.currentPage)

async function displayPopularMovies(){
    const  { results }  = await fetchAPIData('movie/popular'); //passing endpoint here
    
    results.forEach(movie => {
        const div= document.createElement('div');
        div.classList.add('card'); 
        //checking for movie img in data if exists fetch else no-image 
        div.innerHTML = ` 
            <a href='movie-details.html?id=${movie.id}'>
           ${movie.poster_path 
            ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
           class="card-img-top"
           alt="${movie.title}"
           />` 
           : `<img src="../images/no-image.jpg"
           class="card-img-top"
           alt="${movie.title}"
           />`
            }
            </a>
            <div class= "card-body">
            <h5 class= "card-title">${movie.title}</h5>
            <p class= "card-text">
            <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
            </div>
        `;

        document.querySelector('#popular-movies').appendChild(div);
    });
}

//Fetch data from TMDB API
async function fetchAPIData(endpoint){
    const API_KEY = '89b065f503c852471b7275e86922c78e';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

    const data= await response.json();
    return data;
}

//Highlight active link
function highlightActiveLink(){
    const links= document.querySelectorAll('.nav-link');
    links.forEach((link)=>{
        if (link.getAttribute('href')=== global.currentPage){
            link.classList.add('active')
        }
    })
}

//Init app and test for page locations
function init(){  //init works on every page
    switch (global.currentPage){
        case '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            console.log('movie details');
            break;
        case '/tv-details.html':
            console.log('TV details');
            break;
        case '/search.html':
            console.log('search');
            break;
    }
    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
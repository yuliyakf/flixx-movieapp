//89b065f503c852471b7275e86922c78e   api key

//to build routers to different pages need to find out the path to that page with console.log(window.location.pathname)

const global ={
    currentPage: window.location.pathname
}
//console.log(global.currentPage)

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
            console.log('Home');
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
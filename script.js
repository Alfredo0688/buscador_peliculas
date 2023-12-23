const apiKey = 'a9c5aeafc5529b44a33402fb02b1ad30'
const urlImagen = 'https://image.tmdb.org/t/p/w500'

document.getElementById('searchButton').addEventListener('click', searchMovies)

function searchMovies() {
    console.log("entró")
    const nombrePeli = document.getElementById('searchInput').value
    fetch(`https://api.themoviedb.org/3/search/movie?query=${nombrePeli}&api_key=${apiKey}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            mostrarPeli(json.results)
        })
}

function mostrarPeli(movies) {
    console.log(typeof (movies))
    console.log(`resultados obtenidos: ${movies} longitud: ${movies.length}`)
    const divResultado = document.getElementById('results');
    divResultado.innerHTML = '';
    if (movies.length === 0) {
        console.log('No hay resultados');
        divResultado.innerHTML = '<p>No se encontrarón peliculas</p>'
        return
    }

    movies.forEach(movie => {
        console.log("entró")
        const divMovie = document.createElement('div')
        divMovie.classList.add('movie')

        const nombre = document.createElement('h1')
        nombre.textContent = movie.original_title
        divMovie.appendChild(nombre)
        
        const descripcion = document.createElement('p')
        descripcion.textContent = movie.overview
        divMovie.appendChild(descripcion)
        
        const fechaLanzamiento = document.createElement('p')
        fechaLanzamiento.textContent = movie.release_date
        divMovie.appendChild(fechaLanzamiento)

        const poster = document.createElement('img')
        poster.src = urlImagen+movie.poster_path
        divMovie.appendChild(poster)

        divResultado.appendChild(divMovie)
    });
}
var logo = $('#img');
var base = $('#root');
var container = $('<div class="container"></div>');
var description = movie.description.substring(0, 300);

$('<div class="container"></div>').addClass('container');

base.append(logo);
base.append(container);


function reset() {
    $('#reset').click(function(e) {
        $('.container').empty();
    })
}

function getAPI() {
    $('#btn-char').click(function(e) {
        e.preventDefault();
        console.log("Characters")
        fetch('https://api.jikan.moe/v3/manga/1/characters')
            .then(res => {
                return res.json()
            })
            .then(data => {
                data.characters.forEach(character => {
                    container.append(`
                    <div class="card">
                        <h1>${character.name}</h1>
                        <img src="${character.image_url}"/>
                    </div>`);
                });
            });
    });
}


function getRecommendationAPI() {
    $('#btn-recommendation').click(function(e) {
        e.preventDefault();
        console.log("Recommendations")
        fetch('https://api.jikan.moe/v3/manga/1/recommendations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                data.recommendations.forEach(recommendations => {
                    container.append(`
                    <div class="card">
                        <h1>${recommendations.title}</h1>
                        <img src="${recommendations.image_url}"/>
                    </div>`);
                });
            });
    });
}

function getMovieAPI() {
    $('#btn-movies').click(function(e) {
        e.preventDefault();
        console.log("Movies")
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                data.description.forEach(movie => {
                    container.append(`
                    <div class="card">
                        <h1>${movie.title}</h1>
                        <p>${movie.description}</p>
                    </div>`);
                });
            });
    });
}

function init() {
    console.log("i made it to init")
    getAPI();
    getRecommendationAPI();
    getMovieAPI();
    reset();
}

$(init);
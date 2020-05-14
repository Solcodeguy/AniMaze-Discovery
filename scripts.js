var logo = $('#img');
var base = $('#root');
var container = $('<div class="container"></div>');
$('<div class="container"></div>').addClass('container');
var clearResults = $('<input type="reset" id="#reset">Clear Results</input>');
base.append(clearResults);
base.append(logo);
base.append(container);
var url = 'https://api.jikan.moe/v3/manga/1/';

function reset() {
    $(document).on('click', "input[type='reset']", function(e) {
        e.preventDefault();
        $('.card').remove();
    })
}

function getAPI() {
    $('#btn-char').click(function(e) {
        e.preventDefault();
        // console.log("Characters")
        $('.card').remove();
        fetch(url+'characters')
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
                $('#img').remove();
            });
    });
}


function getRecommendationAPI() {
    $('#btn-recommendation').click(function(e) {
        e.preventDefault();
        // console.log("Recommendations")
        $('.card').remove();
        fetch(url+'recommendations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                data.recommendations.forEach(recommendations => {
                    container.append(`
                    <div class="card">
                        <h1>${recommendations.title}</h1>
                        <img src="${recommendations.image_url}"/>
                   </div>`);
                });
                $('#img').remove();
            });
    });
}

function getMovieAPI() {
    $('#btn-movies').click(function(e) {
        e.preventDefault();
        // console.log("Movies")
        $('.card').remove();
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                data.forEach(movie => {
                    base.append(`
                    <div class="card">
                        <h1>${movie.title}</h1>
                        <p>${movie.description}</p>
                    </div>`);
                });
                $('#img').remove();
            });
    });
}

function init() {
    // console.log("i made it to init")
    getAPI();
    getRecommendationAPI();
    getMovieAPI();
    reset();
}

$(init);
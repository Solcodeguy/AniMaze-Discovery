/* // EventListener for second API, listen to each button by Class */
$("button")[0].addEventListener('click', getAPI);
$("button")[0].addEventListener('click', getMovieAPI);
$("button")[0].addEventListener('click', getRecommendationAPI);

const app2 = $('#root');
const logo2 = $('img');
logo2.attr({ src: 'logo.png' });

const container = $('div');
container.addClass('container');

$('app2').append($('logo2'));
$('app2').append($('container'));




function getAPI() {
    console.log('?log')
    fetch('https://api.jikan.moe/v3/manga/1/characters')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            var data2 = data.characters;
            console.log(data2)
            $.each(function(i) {
                const card = $('div');
                card.addClass('card');

                const h1 = $('h1');
                h1.attr({ textContent: character.name });


                const img = $('img');
                img.attr({ src: character.image_url });


                container.append(card);
                card.append(h1);
                card.append(img);
            });
            //  } else {


        });
}

function getMovieAPI() {
    console.log('?log')
    fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            var data2 = data.slice(0, 20);
            console.log(data2)

            $.each(data2 => {
                const card = $('div');
                card.addClass('card');

                const h1 = $('h1');
                h1.attr({ textContent: movie.title });

                const p = $('p');
                movie.description = movie.description.substring(0, 300);
                p.attr({ textContent: movie.description });

                container.append(card);
                card.append(h1);
                card.append(p);
            });

        });
}

function getRecommendationAPI() {
    console.log('?log')
    fetch('https://api.jikan.moe/v3/manga/1/recommendations')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            var data2 = data.recommendations;
            console.log(data2)
            $.each(recommendations => {
                const card = $('div');
                card.addClass('card');

                const h1 = $('h1');
                h1.attr({ textContent: recommendations.title });

                const img = $('img');
                img.attr({ src: recommendations.image_url });

                container.append(card);
                card.append(h1);
                card.append(img);
            });
            //  } else {
            //  const fetchErrorMessage = document.createElement('marquee');
            //  fetchErrorMessage.textContent = `
            //  }
        });
};
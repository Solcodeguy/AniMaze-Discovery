 /* // EventListener for second API, listen to each button by Class */
 $("#characters")[0].addEventListener('click', getAPI);



 const app2 = document.getElementById('root');
 const logo2 = document.createElement('img');
 logo2.src = 'logo.png';

 const container = document.createElement('div');
 container.setAttribute('class', 'container');

 app2.appendChild(logo2);
 app2.appendChild(container);

 function getAPI() {
     $('#characters').click(function() {
         $('data').remove();
     });

     //  $('getRecommendationAPI').click(function() {
     //  $('card').remove();
     //  });


     console.log('?log')
     fetch('https://api.jikan.moe/v3/manga/1/characters')
         .then((res) => {
             return res.json()
         })
         .then((data) => {
             console.log(data)
             var data2 = data.characters;
             console.log(data2)
                 //  if (res.status >= 200 && request.status < 400) {
             data2.forEach(character => {
                 const card = document.createElement('div');
                 card.setAttribute('class', 'card');

                 const h1 = document.createElement('h1');
                 h1.textContent = character.name;

                 const img = document.createElement('img');
                 //  character.description = character.description.substring(0, 300);
                 img.src = `${character.image_url}`;

                 container.appendChild(card);
                 card.appendChild(h1);
                 card.appendChild(img);
             });
             //  } else {
             //  const fetchErrorMessage = document.createElement('card');
             //  fetchErrorMessage.textContent = `Oops, something went wrong!`;
             //  app2.appendChild(errorMessage);
             //  }
         })
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

             //  if (res.status >= 200 && request.status < 400) {
             data2.forEach(movie => {
                 const card = document.createElement('div');
                 card.setAttribute('class', 'card');

                 const h1 = document.createElement('h1');
                 h1.textContent = movie.title;

                 const p = document.createElement('p');
                 movie.description = movie.description.substring(0, 300);
                 p.textContent = `${movie.description}...`;

                 container.appendChild(card);
                 card.appendChild(h1);
                 card.appendChild(p);
             });
             //  } else {
             //  const fetchErrorMessage = document.createElement('marquee');
             //  fetchErrorMessage.textContent = `Oops, something went wrong!`;
             //  app2.appendChild(errorMessage);
             //  }
         })
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
                 //  if (res.status >= 200 && request.status < 400) {
             data2.forEach(recommendations => {
                 const card = document.createElement('div');
                 card.setAttribute('class', 'card');

                 const h1 = document.createElement('h1');
                 h1.textContent = recommendations.title;

                 const img = document.createElement('img');
                 //  character.description = character.description.substring(0, 300);
                 img.src = `${recommendations.image_url}`;

                 container.appendChild(card);
                 card.appendChild(h1);
                 card.appendChild(img);
             });
             //  } else {
             //  const fetchErrorMessage = document.createElement('marquee');
             //  fetchErrorMessage.textContent = `Oops, something went wrong!`;
             //  app2.appendChild(errorMessage);
             //  }
         })
 }
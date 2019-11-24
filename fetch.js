{ /* // EventListener for second API, listen to each button by Class */ }
document.getElementsByClassName('getAPI').addEventListener('click', getAPI);

var request = new XMLHttpRequest();
request.onClick('GET', 'https://api.jikan.moe/v3/anime/1');
request.onreadystatechange = function() {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

function getAPI() {
    fetch('https://api.jikan.moe/v3/anime/1/news/1')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
                var data = JSON.parse(this.response);
                var info = data.slice(0, 5);
                if (request.status >= 200 && request.status < 400) {
                    info.forEach((anime => {
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
                    }));
                } else {
                    const errorMessage = document.createElement('marquee');
                    errorMessage.textContent = `Oops, something went wrong!`;
                    app.appendChild(errorMessage);
                }
            }
            request.send();
{ /* // EventListener for second API, listen to each button by Class */ }
document.getElementsByClassName('getAPI').addEventListener('click', getAPI());

var fetchRequest = new XMLHttpRequest();
fetchRequest.onClick('GET', 'https://api.jikan.moe/v3/anime/1/recommendations');
fetchRequest.onreadystatechange = function() {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

function getAPI() {
    fetch('https://api.jikan.moe/v3/anime/1/recommendations')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            var data = JSON.parse(this.response);
            var info = data.slice(0, 10);
            const w = window.open();
            $(w.document.body).html(res);
            if (request.status >= 200 && request.status < 400) {
                info.forEach((anime => {
                    const w.card = document.createElement('div');
                    card.setAttribute('class', 'card');

                    const h1 = document.createElement('h1');
                    h1.textContent = anime.title;

                    const p = document.createElement('p');
                    anime.description = anime.description.substring(0, 300);
                    p.textContent = `${anime.description}...`;

                    container.appendChild(w.card);
                    card.appendChild(h1);
                    card.appendChild(p);
                }));
            } else {
                const fetchErrorMessage = document.createElement('marquee');
                fetchErrorMessage.textContent = `Oops, something went wrong!`;
                app.appendChild(errorMessage);
            }
        })
    fetchRequest.send();
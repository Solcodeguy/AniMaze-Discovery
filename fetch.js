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
            return res.json()
        })
        .then((html) => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, "text/html");
            const w = window.open();
            $(w.document.body).html(res);
            if (request.status >= 200 && request.status < 400) {
                info.forEach((recommendations => {
                    const card = document.createElement('div');
                    card.setAttribute('class', 'card');

                    const h1 = document.createElement('h1');
                    h1.textContent = recommendations.title;

                    const p = document.createElement('p');
                    recommendations.description = recommendations.description.substring(0, 300);
                    p.textContent = `${recommendations.description}...`;

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
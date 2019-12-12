 /* // EventListener for second API, listen to each button by Class */
 //  document.getElementsByClassName('getAPI').addEventListener('click', getAPI());

 const app2 = document.getElementById('root');
 const logo2 = document.createElement('img');
 logo2.src = 'logo.png';


 //  app2.appendChild(logo2);
 //  app2.appendChild(container);



 var request = new XMLHttpRequest();
 request.onclick('GET', 'https://api.jikan.moe/v3/manga/1/characters');
 request.onclick = function() {
     //  if (this.readyState === 4) {
     //  alert("success")
     //  console.log('Status:', this.status);
     //  console.log('Headers:', this.getAllResponseHeaders());
     //  console.log('Body:', this.responseText);
     //  }


     function getAPI() {
         console.log('?log')
         fetch('https://api.jikan.moe/v3/manga/1/characters')
             .then((res) => {
                 return res.json()
             })
             .then((data) => {
                 var data2 = JSON.parse(this.responses);

                 var info2 = data2.slice(0, 10);

                 if (request.status >= 200 && request.status < 400) {
                     info2.forEach(characters => {
                         const card = document.createElement('div');
                         card.setAttribute('class', 'card');

                         const h1 = document.createElement('h1');
                         h1.textContent = characters.title;

                         const p = document.createElement('p');
                         characters.description = characters.description.substring(0, 300);
                         p.textContent = `${characters.description}...`;

                         container.appendChild(card);
                         card.appendChild(h1);
                         card.appendChild(p);
                     });
                 } else {
                     const fetchErrorMessage = document.createElement('marquee');
                     fetchErrorMessage.textContent = `Oops, something went wrong!`;
                     app2.appendChild(errorMessage);
                 }
             })
     }
 };
 request.send();
async function getAPI() {
    let response = await fetch('https;//api.jikan.moe/v3/manga/1/characters');
    // proceed once first promise is resolved
    let data = await response.json()
        //proceed only when the second promise is resolved
    return data;

}

//call getAPI function
getAPI()
    .then(data => console.log(response)); //log data
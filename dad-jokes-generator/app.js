document.addEventListener("DOMContentLoaded", function () {
    const btnElement = document.querySelector("#btn")
    const jokeElement = document.querySelector('#joke')

    btnElement.addEventListener("click", function (event){
    const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
    const apiKey = "ToiWxYYM/ZPWNmQvoiDvxg==ebQT2F2gnUGW046U";
    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
        }

    };
    jokeElement.innerText = "Updating...";
    btnElement.disabled = true;
    btnElement.innerText = "Loading...";
    fetch(apiURL,options)
        .then(response => response.json())
        .then(json => {
            const dadJoke = json[0].joke;
            jokeElement.innerText = dadJoke;

            btnElement.disabled = false;
            btnElement.innerText = "Tell me a joke!";

        })
        .catch(error => {
            jokeElement.innerText = "Error happened, try again later."
            console.error(error);
        });
    })
})

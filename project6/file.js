// JavaScript file (file.js)
let joke = document.getElementById('joke');
let url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

function gen() {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            document.getElementById('joke').innerHTML = item.joke;
        });
}

gen();

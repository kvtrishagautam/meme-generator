const generateMemeBtn = document.querySelector(".memegen .meme");
const memeImage = document.querySelector(".memegen img");
const memeTitle = document.querySelector(".memegen .memeTitle");
const memeAuthor = document.querySelector(".memegen .memeAut");

const updateDetails = ( url, title, author) => {
    memeImage.setAttribute("src",url );
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then(data => {
        updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click",generateMeme);

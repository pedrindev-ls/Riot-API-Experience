import { fetchChamp } from "./fetchChamp.js";

const splash = document.getElementById('champion-image');
const champName = document.querySelector('.title-name');
const nameTitle = document.createElement('p');
const inputButton = document.getElementById('inputButton')
const inputChamp = document.getElementById('search');

const idTitleFetch = async (rawData) => {
    const chosenOne = inputChamp.value;
    const id = rawData.data[chosenOne].id
    const title = rawData.data[chosenOne].title
    nameTitle.innerText = `${id} ${title}`
    champName.appendChild(nameTitle);
}
const splashFetch = (rawData) => {
    const chosenOne = inputChamp.value;
    const splashImg = document.createElement('img');
    const splashChosen = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chosenOne}_0.jpg`
    splashImg.src = splashChosen;
    splash.append(splashImg);
}
const dataFetch = async () => {
    const rawData = await fetchChamp();
    idTitleFetch(rawData);
    splashFetch(rawData);

};
inputButton.addEventListener('click', dataFetch);

// window.onload = () => {};

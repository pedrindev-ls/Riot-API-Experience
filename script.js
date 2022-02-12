import { fetchChamp } from "./fetchChamp.js";

const splash = document.getElementById('champion-image');
const champName = document.querySelector('.title-name');
const nameTitle = document.createElement('p');
const champLore = document.getElementById('lore');
const champType = document.getElementById('champion-type');
const champPassive = document.getElementById('spells');
const champTips = document.getElementById('user-text');
const champTipsVs = document.getElementById('versus-text');
const inputButton = document.getElementById('inputButton');
const inputChamp = document.getElementById('search');

const idTitleFetch = async (rawData) => {
    const chosenOne = inputChamp.value;
    const id = rawData.data[chosenOne].id;
    const title = rawData.data[chosenOne].title;
    nameTitle.innerText = `${id} ${title}`;
    champName.appendChild(nameTitle);
}
const splashFetch = () => {
    const chosenOne = inputChamp.value;
    splash.innerHTML = '';
    const splashImg = document.createElement('img');
    const splashChosen = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${chosenOne}_0.jpg`;
    splashImg.src = splashChosen;
    splash.append(splashImg);
}
const loreFetch = (rawData) => {
    const chosenOne = inputChamp.value;
    champLore.innerHTML = '';
    const lore = document.createElement('p');
    lore.innerText = rawData.data[chosenOne].lore;
    champLore.appendChild(lore);
}
const typeFetch = (rawData) => {
    const chosenOne = inputChamp.value;
    champType.innerHTML = '';
    const type = rawData.data[chosenOne].tags
    const champRole = document.createElement('p');
    champRole.innerText = type;
    champType.appendChild(champRole);
}
const passiveFetch = (rawData) => {
    const chosenOne = inputChamp.value;
    champPassive.innerHTML = '';
    const passiveName = document.createElement('p');
    const passiveDescrip = document.createElement('p');
    const passiveImg = document.createElement('img');
    const passiveNM = rawData.data[chosenOne].passive.name;
    const passiveDscrp = rawData.data[chosenOne].passive.description;
    const passiveAddress = rawData.data[chosenOne].passive.image.full;
    const passiveIm = `https://ddragon.leagueoflegends.com/cdn/12.3.1/img/passive/${passiveAddress}`
    passiveName.innerHTML = passiveNM;
    passiveDescrip.innerHTML = passiveDscrp;
    passiveImg.src = passiveIm;
    champPassive.appendChild(passiveName);
    champPassive.appendChild(passiveDescrip);
    champPassive.appendChild(passiveImg);
}
const tipsFetch = (rawData) => {
    const chosenOne = inputChamp.value;
    champTips.innerText = rawData.data[chosenOne].allytips;
    champTipsVs.innerHTML = rawData.data[chosenOne].enemytips;
    
}
const skillsFetch = (rawData) => {
    const chosenOne = inputChamp.value;
    const skillQ = document.createElement('p');
    const skillW = document.createElement('p');
    const skillE = document.createElement('p');
    const skillR = document.createElement('p');
    const skillQDom = document.getElementById("Q");
    const skillWDom = document.getElementById('spell-W');
    const skillEDom = document.getElementById('spell-E');
    const skillRDom = document.getElementById('spell-R');
    skillQ.innerHTML = rawData.data[chosenOne].spells[0].name;
    skillW.innerHTML = rawData.data[chosenOne].spells[1].name;
    skillE.innerHTML = rawData.data[chosenOne].spells[2].name;
    skillR.innerHTML = rawData.data[chosenOne].spells[3].name;
    console.log(skillQDom);
    skillQDom.appendChild(skillQ);
}
const dataFetch = async () => {
    const rawData = await fetchChamp();
    idTitleFetch(rawData);
    splashFetch();
    loreFetch(rawData);
    typeFetch(rawData);
    passiveFetch(rawData);
    tipsFetch(rawData);
    skillsFetch(rawData);
};
inputButton.addEventListener('click', dataFetch);

// window.onload = () => {};

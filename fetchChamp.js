export const fetchChamp = async () => {
    const inputChamp = document.getElementById('search');
    const chosenOne = inputChamp.value;
    const url = `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/pt_BR/champion/${chosenOne}.json`
    return await fetch(url)
    .then(response => response.json())
    // .catch(error)
};

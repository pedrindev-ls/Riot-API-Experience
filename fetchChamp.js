export const fetchChamp = async () => {
    const inputChamp = document.getElementById('search');
    const chosenOne = inputChamp.value;
    const url = `https://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/${chosenOne}.json`
    return await fetch(url)
    .then(response => response.json())
    // .catch(error)
};

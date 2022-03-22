const fetchPokemon = (poke) =>{
    const urlRAW = 'https://pokeapi.co/api/v2/pokemon/';
    let url = urlRAW +poke;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./sad-pikachu.gif");
        }else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data)
        let pokeIMG = data.sprites.front_default;
        console.log(pokeIMG)
        pokeImage(pokeIMG); 
    })
}

const pokeImage = (url) => {
    const pokeimg = document.getElementById("img");
    pokeimg.src = url;
}

const imprimir = () => {
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value;
    fetchPokemon(pokeInput);
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png");

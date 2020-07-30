class Marvel{
    constructor() {

    }

    async getData(name) {
        let character = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=clave`);
        let response = await character.json();
        return response;

    }
    async init() {
        const character = await this.getData("Spider-man");
        this.update(character)
    }
 
    update(character) {
        window.nombre.textContent = character.data.results[0].name;
        window.img.setAttribute("src", `${character.data.results[0].thumbnail.path}.jpg`)
    }
}

let marvel = new Marvel();
marvel.init();
document.querySelector("#btn").addEventListener("click", async () => {
    try {
        const character = await marvel.getData(window.buscar.value);
        marvel.update(character);
        document.querySelector("#form").reset();
        document.querySelector("#error").innerHTML = "";
    } catch (error) {
        document.querySelector("#form").reset();
        document.querySelector("#error").innerHTML = "No se encuentra";
    }
   
});

class Marvel{
    constructor() {

    }

    async getData(name) {
        let character = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&tsformegit`);
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
/*    getImg(img,name) {
        let div = document.querySelector("#result");
        let elemento = document.createElement("div");
        elemento.innerHTML = `
        <img src="${img}.jpg">
        <h2 class="titleNombre">Nombre</h2>
        <p class="nombre">${name}</p>
        `;
        return div.appendChild(elemento)
    } */

    /* form() {
        let search = document.querySelector("#buscar").value;
        return search;
    } */

   
  /*   async search() {
        let name = this.form();
        let character = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=d4fee5473695c8b140ad5e4b3339c25d&hash=d143b55b12e948f9fb62722e1353f4e7`);
        let response = await character.json();
        this.getImg(response.data.results[0].thumbnail.path, response.data.results[0].name);
    } */
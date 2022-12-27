import {registerImage} from "./lazy"

//Crear una imagen
//Agregar #imagen

const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {
    const imagen = document.createElement("img")
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //Todo

    const container = document.createElement("div");
    container.className = "p-4 bg-gray-300";
    container.style.minHeight = "100px";
    container.style.display = "inline-block";

    container.appendChild(imagen);
    
    return container;
};

const mountNode = document.getElementById("images");
const addButton = document.getElementById("add");
const delButton = document.getElementById("del");

//Add Images
const addImages = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
    console.log(mountNode.innerHTML)
}

addButton.addEventListener("click", addImages)

//Delete Images 
const delImages = () => {
    console.log(mountNode);
    mountNode.innerHTML= ""
}
delButton.addEventListener("click", delImages)


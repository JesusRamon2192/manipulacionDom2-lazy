

const isIntersecting = (entry) => {
    return entry.isIntersecting; // true dentro de la pantalla
}

const loadImage = (entry) => {
    const container = entry.target; //container(DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //Cargue imagen
    imagen.src = url;

    loadedImages++; 
    printLog();
    
    //console.log("holis");
    //console.log(container.nodeName);
    //desregistra la imagen (unlisten)
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    //console.log(entries);
    entries.filter(isIntersecting).forEach(loadImage);
})

//
export const registerImage = (imagen) => {
    //IntersectionObserver -> observer(imagen)
    observer.observe(imagen);
}
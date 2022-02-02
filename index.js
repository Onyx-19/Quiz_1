// let formulario = document.getElementById("formulario");



let elSelect = document.getElementById ('sabor');

elSelect.addEventListener("change", () => {
    console.log(elSelect.value);
    laImagen.setAttribute("src","durazno.jpg" + elSelect.selectedOptions[0].value + "jpg")
    laImagen.setAttribute("src", "kiwi.jpg" + elSelect.selectedOptions[1].value + "jpg")
    laImagen.setAttribute("src", "maracuya.jpg" + elSelect.selectedOptions[2].value + "jpg")
    laImagen.setAttribute("src", "sandia.jpg" + elSelect.selectedOptions[3].value + "jpg")    
    console.log(durazno.value);
})

// elSelect.addEventListener("change",()=>{
//     laImagen.setAttribute("src","durazno.jpg" + elSelect.selectedOptions[0].value + ".jpg")
//   })



// let helados = documen.getElementById ("helados");
// helados.addEventListener("change", () => {
//     let durazno = documen.getElementById("src","url");
//     let durazno = documen.getElementById("img","img/durazno.png");
// })

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     let nombre = document.getElementById('nombre').value;
//     let apellido = document.getElementById('apellido').value;
//     let direccion = document.getElementById('direccion').value;
//     let telefono = document.getElementById('telefono').value;
//     let sabor = document.getElementById('sabor').value;

//     let array = [nombre, apellido, direccion, telefono, sabor];
//     console.log(array);
// })




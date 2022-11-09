function guardar(){
    db.collection("articulo").add({
        titulo_articulo: document.getElementById("Titulo_articulo").value,
        texto: document.getElementById("texto_articulo").value,
        imgn: document.getElementById("imagen").value,
    })
    .then((docRef) => {
        alert("registro exitoso");
    })
    .catch((error) => {
        alert("error en el registro");
    });
}
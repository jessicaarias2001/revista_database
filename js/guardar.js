function guardar(){
    db.collection("articulo").add({
        edicion_insertar: document.getElementById("edicion_insertar").value,
        seccion_revista: document.getElementById("seccion_insertar").value,
        titulo_articulo: document.getElementById("Titulo_articulo").value,
        texto: document.getElementById("texto_articulo").value,
        img: document.getElementById("imagen").value,
        otros:document.getElementById("otros").value,      
    })
    .then((docRef) => {
        alert("registro exitoso");
    })
    .catch((error) => {
        alert("error en el registro");
    });
}


function eliminar(id){
    db.collection("articulo").doc(id).delete({
     
    })
    .then((docRef) => {
        alert("registro eliminado");
    })
    .catch((error) => {
        alert("error, registro no eliminado");
    });
}

function buscar_articulos_para_eliminar(){
    db.collection("articulo").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("articulos_encontrados").innerHTML=`${doc.data().titulo_articulo}`
            ;
        });
    });
}

var tabla = document. getElementById('tabla');
db.collection("articulo").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML+=`
        <tr>
            <td scope="row">${doc.data().edicion_insertar}</td>
            <td scope="col">${doc.data().seccion_revista}</td>
            <td scope="col">${doc.data().titulo_articulo}</td>  
            <td> <button onclick="eliminar('${doc.id}')">Eliminar</button> </td>        
        </tr>
        `
    });
});



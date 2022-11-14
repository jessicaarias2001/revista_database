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
        document.getElementById("edicion_insertar").value='';
            document.getElementById("seccion_insertar").value='';
            document.getElementById("Titulo_articulo").value='';
            document.getElementById("texto_articulo").value='';
    })
    .catch((error) => {
        alert("error en el registro");
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

//Borrar articulos
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
            <td> <button onclick="modificar('${doc.id}','${doc.data().edicion_insertar}','${doc.data().seccion_revista}','${doc.data().titulo_articulo}','${doc.data().texto}')">Modificar</button> </td>   
        </tr>
        `
    });
});

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

//modificar/ editar articulos

function modificar(id,edicion,seccion,titulo,texto){
    
    document.getElementById("edicion_modificar").value=edicion;
    document.getElementById("seccion_modificar").value=seccion;
    document.getElementById("titulo_articulo_modificar").value=titulo;
    document.getElementById("texto_articulo_modificar").value=texto;

    var boton=document.getElementById("modificar_articulo_boton");
    boton.onclick=function(){
        var washingtonRef = db.collection("articulo").doc(id);

        var edicion=document.getElementById("edicion_modificar").value;
        var seccion=document.getElementById("seccion_modificar").value;
        var titulo=document.getElementById("titulo_articulo_modificar").value;
        var texto=document.getElementById("texto_articulo_modificar").value;


        return washingtonRef.update({
        edicion_insertar:edicion,
        seccion_revista:seccion ,
        titulo_articulo: titulo,
        texto:texto,
        //img: imagen 
        })
        .then(() => {
            console.log("Document successfully updated!");
            document.getElementById("edicion_modificar").value='';
            document.getElementById("seccion_modificar").value='';
            document.getElementById("titulo_articulo_modificar").value='';
            document.getElementById("texto_articulo_modificar").value='';
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });   
        }
        // Set the "capital" field of the city 'DC'
        
}
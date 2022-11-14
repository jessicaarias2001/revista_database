// function articulos_economia(){
//     db.collection("articulo").onSnapshot((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             document.getElementById("titulo_articulo_economia").innerHTML=`${doc.data().titulo_articulo}`
//             ;
//         });
//     });
// }

//Borrar articulos
//function articulos_economia(){
    var titulo_economia_1 = document. getElementById('titulo_articulo_economia_1');
    var texto_economia_1 = document. getElementById('texto_articulo_economia_1');
    
    db.collection("articulo").where("seccion_revista", "==", "Deportes").onSnapshot((querySnapshot) => {
        titulo_economia_1.innerHTML='';
        texto_economia_1.innerHTML='';
        
            querySnapshot.forEach((doc) => {
                
                //document.getElementById("titulo_articulo_economia").innerHTML+=`${doc.data().titulo_articulo}`;
                console.log(`${doc.id} => ${doc.data()}`);
                //var prueba=articulo[1].getAttribute("titulo_articulo");
                titulo_economia_1.innerHTML+=`
                <p  class="tituloarticulo">${doc.data().titulo_articulo}</p>`
                texto_economia_1.innerHTML+=`
                <p  class="fondotext">${doc.data().texto}</p>`
                //  <tr>
                //      <td scope="row">${doc.data().edicion_insertar}</td>
                //      <td scope="col">${doc.data().seccion_revista}</td>
                //      <td scope="col">${doc.data().titulo_articulo}</td>  
                //      <td> <button onclick="eliminar('${doc.id}')">Eliminar</button> </td>      
                //      <td> <button onclick="modificar('${doc.id}','${doc.data().edicion_insertar}','${doc.data().seccion_revista}','${doc.data().titulo_articulo}','${doc.data().texto}')">Modificar</button> </td>   
                //  </tr>
                  
        });
    });
//}

var tabla = document. getElementById('tabla_economia');
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
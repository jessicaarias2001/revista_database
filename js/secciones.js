 function filtrar(){
     var tabla_deportes = document. getElementById('economia_secciones');
     var seccion=document.getElementById("seccion_filtrar").value;
     db.collection("articulo").where("seccion_revista", "==", seccion).onSnapshot((querySnapshot) => {
         tabla_deportes.innerHTML='';
         querySnapshot.forEach((doc) => {
             console.log(`${doc.id} => ${doc.data()}`);
             tabla_deportes.innerHTML+=`
             <tr>
                 <td scope="row">${doc.data().edicion_insertar}</td>
                 <td scope="col">${doc.data().seccion_revista}</td>
                 <td scope="col">${doc.data().titulo_articulo}</td>  
                 <td scope="col">${doc.data().texto}</td> 
                 <td> <button onclick="ver_articulo('${doc.id}','${doc.data().edicion_insertar}','${doc.data().seccion_revista}','${doc.data().titulo_articulo}','${doc.data().texto}')">Ver</button> </td> 
                 </tr>
             `
         });
     });
 } 
 function ver_articulo(id,edicion,seccion,titulo,texto){

//     document.getElementById("titulo_articulo_economia_1").value=titulo;
//     document.getElementById("texto_articulo_economia_1").value=texto;

    var titulo_economia_1 = document. getElementById('titulo_articulo_economia_1');
    var texto_economia_1 = document. getElementById('texto_articulo_economia_1');
    
    //var texto = fb.reference().child("usuarios/${userID}");
    
    db.collection("articulo").onSnapshot((querySnapshot) => {
        titulo_economia_1.innerHTML='';
        texto_economia_1.innerHTML='';
        
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                titulo_economia_1.innerHTML=`
                <p  class="tituloarticulo"> ${titulo} </p>`
                texto_economia_1.innerHTML=`
                <p  class="fondotext">${texto}</p>`
                    
        });
    });
}
 var tabla_economia = document. getElementById('economia_secciones');
 db.collection("articulo").onSnapshot((querySnapshot) => {
     tabla_economia.innerHTML='';
     querySnapshot.forEach((doc) => {
         console.log(`${doc.id} => ${doc.data()}`);
         tabla_economia.innerHTML+=`
         <tr>
             <td scope="row">${doc.data().edicion_insertar}</td>
             <td scope="col">${doc.data().seccion_revista}</td>
             <td scope="col">${doc.data().titulo_articulo}</td>  
             <td scope="col">${doc.data().texto}</td>  
             <td> <button onclick="ver_articulo('${doc.id}','${doc.data().edicion_insertar}','${doc.data().seccion_revista}','${doc.data().titulo_articulo}','${doc.data().texto}')">Ver</button> </td> 
              </tr>
         `
     });
 });
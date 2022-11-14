//  citiesRef = db.collection("articulo");
//  id_secciones= [];
 //query =citiesRef.whereIn("seccion", Arrays.asList(Arrays.asList("deportes")));
 //query =citiesRef.whereIn("seccion", Arrays.asList(Arrays.asList("deportes"), Arrays.asList("east_coast")));
   //     elementList = parentNode.querySelectorAll(selectors);
   //console.log( query);
    var tabla_deportes = document. getElementById('deportes_secciones');
    //var seccion=document.getElementById("seccion_filtrar").value;
    db.collection("articulo").where("seccion_revista", "==", "Deportes").onSnapshot((querySnapshot) => {
        tabla_deportes.innerHTML='';
        id_n=0;
        querySnapshot.forEach((doc) => {
           
             id_n=id_n+1;
             //console.log(`${doc.id} => ${doc.data()}`);
             asignar_secciones(id_n,`${doc.id}`,`${doc.data().edicion_insertar}`,`${doc.data().seccion_revista}`,`${doc.data().titulo_articulo}`,`${doc.data().texto}`)
             console.log(id_n)
            
           
        });
    });

function asignar_secciones(n,id,edicion,seccion,titulo,texto){

    //     document.getElementById("titulo_articulo_economia_1").value=titulo;
    //     document.getElementById("texto_articulo_economia_1").value=texto;
    switch (n) {
        case 1 :
//           console.log('El kilogramo de manzanas cuesta $0.32.');
//           break;
        var titulo_economia_1 = document. getElementById('titulo_deportes_1');
        var texto_economia_1 = document. getElementById('texto_deportes_1');
        
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
        break;
        case 2:
            var titulo_economia_1 = document. getElementById('titulo_deportes_2');
            var texto_economia_1 = document. getElementById('texto_deportes_2');
            
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
        break;
        case 3:
            var titulo_economia_1 = document. getElementById('titulo_deportes_3');
            var texto_economia_1 = document. getElementById('texto_deportes_3');
            
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
        break;
    }
}
//  function asignar_secciones_(n,id,edicion,seccion,titulo,texto){
//     var titulo_d = document. getElementById('titulo_deportes_1');
//     var texto_d = document. getElementById('texto_deportes_1');
//     db.collection("articulo").onSnapshot((querySnapshot) => {
//                 titulo_d.innerHTML='';
//                 texto_d.innerHTML='';
                
//                     querySnapshot.forEach((doc) => {
//                         console.log(`${doc.id} => ${doc.data()}`);
//     switch (n) {
//         case 1:
            
            
//             //var texto = fb.reference().child("usuarios/${userID}");
            
            
//                         // titulo_economia_1.innerHTML=`
//                         // <p  class="tituloarticulo"> ${titulo} </p>`
//                         // texto_economia_1.innerHTML=`
//                         // <p  class="fondotext">${texto}</p>`
                            
//                 });
//             });
//           console.log('El kilogramo de naranjas cuesta $0.59.');
//           break;
//         case 2:
//           console.log('El kilogramo de manzanas cuesta $0.32.');
//           break;
//         case 3:
//           console.log('El kilogramo de platanos cuesta $0.48.');
//           break;
//     }
// }   
    //var texto = fb.reference().child("usuarios/${userID}");
    
    
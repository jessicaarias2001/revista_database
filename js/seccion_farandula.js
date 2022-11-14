/// SECCION FARANDULA
db.collection("articulo").where("seccion_revista", "==", "Deportes").onSnapshot((querySnapshot) => {
    id_n=0;
    querySnapshot.forEach((doc) => {
       
         id_n=id_n+1;
         //console.log(`${doc.id} => ${doc.data()}`);
         seccion_farandula(id_n,`${doc.id}`,`${doc.data().edicion_insertar}`,`${doc.data().seccion_revista}`,`${doc.data().titulo_articulo}`,`${doc.data().texto}`)
         console.log(id_n)
       
    });
});

function seccion_farandula(n,id,edicion,seccion,titulo,texto){
switch (n) {
    case 1 :

    var titulo_farandula_1 = document. getElementById('titulo_farandula_1');
    var texto_farandula_1 = document. getElementById('texto_farandula_1');
  //  var img_deportes_1 = document. getElementById('img_deportes_1');
    

    db.collection("articulo").onSnapshot((querySnapshot) => {
        titulo_farandula_1.innerHTML='';
        texto_farandula_1.innerHTML='';
      //  img_deportes_1.innerHTML='';
        
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                titulo_farandula_1.innerHTML=`
                <p  class="tituloarticulo"> ${titulo} </p>`
                texto_farandula_1.innerHTML=`
                <p  class="fondotext">${texto}</p>`
              //   img_deportes_1.innerHTML=`
               //  <img>${imagen}</img>`
                    
        });
    });
    break;
    case 2:
        var titulo_farandula_1 = document. getElementById('titulo_farandula_2');
        var texto_farandula_1 = document. getElementById('texto_farandula_2');
        
            db.collection("articulo").onSnapshot((querySnapshot) => {
            titulo_farandula_1.innerHTML='';
            texto_farandula_1.innerHTML='';
            
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    titulo_farandula_1.innerHTML=`
                    <p  class="tituloarticulo"> ${titulo} </p>`
                    texto_farandula_1.innerHTML=`
                    <p  class="fondotext">${texto}</p>`
                });
            });
    break;
    case 3:
        var titulo_farandula_1 = document. getElementById('titulo_farandula_3');
        var texto_farandula_1 = document. getElementById('texto_farandula_3');
          
        db.collection("articulo").onSnapshot((querySnapshot) => {
            titulo_farandula_1.innerHTML='';
            texto_farandula_1.innerHTML='';
            
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    titulo_farandula_1.innerHTML=`
                    <p  class="tituloarticulo"> ${titulo} </p>`
                    texto_farandula_1.innerHTML=`
                    <p  class="fondotext">${texto}</p>`
                });
            });
    break;
}
}




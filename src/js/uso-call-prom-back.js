//Para evitar conflicto al importar podemos usar alias (as nombre_a_importar: Sera el nombre que debemos usar en este archivo)
import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";
import { buscarHeroe } from "./js/promesas";
import './styles.css';

const heroeId1 = "capi";
const heroeId2 = "iron";

//Funciones con callback
// buscarHeroeCallback( heroeId1, ( err, heroe1 )=>{

//     if(err){ return console.error( err ); }

//     buscarHeroeCallback( heroeId2, ( err, heroe2 )=>{

//         if(err){ return console.error( err ); }
    
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });

// });

//Promesas encadenadas. No es la mejor solucion para llamar promesas
//Nombre de error. Promise hell
// buscarHeroe( heroeId1 ).then( (heroe1) =>{

//     buscarHeroe( heroeId2 ).then( (heroe2) =>{
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });

// });


//Encadenando promesas la mejor solucion
Promise.all( [ buscarHeroe( heroeId1 ) , buscarHeroe( heroeId2 ) ] )
    .then( ([heroe1, heroe2]) => {

    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

})
.catch( (error)=> {
    console.log('Erro al ejecutar promesa', error);
})
.finally( ()=> {
    //Este codigo se ejecutara si la promesa se resolvio con exito o no
    console.log('Finalizacion de promise.all');
});


console.log("Fin del programa");


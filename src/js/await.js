/* 
Archivo que contiene el uso de await.
Await nos sirve para poder esperar la respuesta de una promesa antes de seguir ejecutando el codigo
Para poder usar esta palabra al momento de esperar la respuesta de promesa, la funcion donde estemos ejecutando este codigo
debe de ser una funcion que retorne una promesa
*/

import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi','iron','spider'];

//Primera solucion. No es la mejor solucion
// export const obtenerHeroesArr = async () => {

//     const heroesArr = [];

//     for(const id of heroesIds){
//         let heroe = await buscarHeroeAsync(id);
//         heroesArr.push(heroe);
//     }

//     return heroesArr;
// };


//Segunda solucion. Es un mejor forma de trabajar con el await
//1- Tener un array de promesas
//2- Resolver esas promesas con Promise.all
//3- Ejecutar las promesas con Promise.all y esperar respuesta con await
export const obtenerHeroesArr = async () => {

    //Manera mas cortar de realizar lo antes mencionado
    return await Promise.all( heroesIds.map( buscarHeroe ) )

    //Manera de realizar el proceso con mas codigo
    // const heroesArr = [];

    // for(const id of heroesIds){
    //     heroesArr.push( buscarHeroe(id) );
    // }

    // return await Promise.all(heroesArr);
};


//Como manajer errorres en el await
//Para manejara los errores debemos de usar try and catch
//try: Codigo que se ejecuta cuando todo sale bien
//catch: Codigo que se ejecuta cuando tenemos un error en la promise debemos usar throw de lo contrario el error no se ejecutara en catch
export const obtenerHeroeAwait = async ( id ) => {
    try{
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    }
    catch(error){
        console.log('CATCH!!');
        throw error;
    }
};


//Utilizando await con ciclos
let heroesPromesa = heroesIds.map(buscarHeroe);

export const heroesCiclo = async ()=> {

    console.time('HeroesCliclo');

    //Primera manera de como realizar esto
    // const heroes = await Promise.all(heroesPromesa);
    // heroes.forEach(heroe => {
    //     console.log(heroe);
    // });

    for await ( const heroe of heroesPromesa ){
        console.log(heroe);
    }

    console.timeEnd('HeroesCliclo');

};

//If await
export const heroeIfAwait = async(id) => {

    if( (await buscarHeroe(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos');
    }
    else{
        console.log('Naaaa');
    }


};















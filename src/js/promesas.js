const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacciona alergica a las picaduras de arañas'
    },
}

export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => {
        if(heroe){
            setTimeout( () => resolve(heroe) , 1000 ); 
        }
        else{
            reject(`No existe un héroe con el id ${ id }`);
        }
    });
};

/*
async: Es una manera de crear una funcion que devuelve una promesa pero sin tener que escribir new Promise
En async los errores y resolve se envian de la siguiente manera:
return => resolve
reject => throw = Cuando sabemos porque da el error
reject => throw Error = Cuando no sabemos porque da el error
*/
export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];

    if(heroe){
        return heroe;
    }
    else{
        //throw `No existe un héroe con el id ${ id }`;
        throw Error(`No existe un héroe con el id ${ id }`);
    }
};

const promesaLenta = new Promise( (resolve, reject) => {
    setTimeout( ()=> resolve('Promesa lenta') ,2000 );
});

const promesaMedia = new Promise( (resolve, reject) => {
    setTimeout( ()=> resolve('Promesa media') ,1500 );
});

const promesaRapida = new Promise( (resolve, reject) => {
    setTimeout( ()=> resolve('Promesa rapida') ,1000 );
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
};























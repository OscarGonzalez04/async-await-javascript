import { buscarHeroe, buscarHeroeAsync } from './js/promesas'
import './styles.css';

//Llamado a promesa creada de forma normal
buscarHeroeAsync('capi')
    .then( (heroe) => console.log (heroe) )
    .catch( (error) => console.warn(error) );

//Llamado a promesa creada con palabra clave async
buscarHeroeAsync('iron')
    .then( (heroe) => console.log (heroe) )
    .catch( (error) => console.warn(error) );
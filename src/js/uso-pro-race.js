import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'
import './styles.css';

//Promise.race => Ejecuta un arreglo de promesas y devuelve el mensaje de la promesa mas rapida
Promise.race([ promesaLenta, promesaMedia, promesaRapida ]).then((mensaje)=>{
    console.log(mensaje);
})
.catch((error)=>{
    //Si la promesa mas rapida da error se detendra y se mostrara el error de esa promesa
    console.warn(error);
})
.finally(()=>{
    console.log('Final de Promise.race');
});
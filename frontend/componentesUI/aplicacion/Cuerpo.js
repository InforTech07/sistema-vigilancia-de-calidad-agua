import{Contenedor}from './Contenedor.js';
export function Cuerpo(){
    const $cuerpo = document.createElement('main');
    $cuerpo.appendChild(Contenedor());
    return $cuerpo;
}
"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} hiloactual del modulo y funcionalidades
 */
export function HiloActual(){
    const $hiloactual = document.createElement('div');
        $hiloactual.classList.add("pagina");
        $hiloactual.setAttribute('id',"pg1");
        $hiloactual.setAttribute('style',"display:block;")
        $hiloactual.innerHTML=`
        <h2>Pagina de institucion</h2>
        `;
        return $hiloactual;
}
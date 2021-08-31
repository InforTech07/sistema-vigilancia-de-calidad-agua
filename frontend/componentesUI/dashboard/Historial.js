"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Historial(){
    const $historial = document.createElement('div');
        $historial.classList.add("pagina");
        $historial.setAttribute('id',"pg2");
        $historial.setAttribute('style',"display:none;")
        $historial.innerHTML=`
        <h2>Historial de hilos</h2>
        `;
        return $historial;
}
"use strict";
//@ts-check
/**
 * Opciones del modulo Tanque
 * @module OpcTanque - opciones
 * @author autor 
 * @copyright - ksksue
 * @version 1.0
 */
/**
 * importacion de modulos
 * @requires componente:funciones - mostrar, ocultar y resaltar componentes.
 */
import {mostrarComponente} from '../utilidades/MostrarComponente.js'
/**
 * @type {string} - id de paginas
 */

const BTN_1 = 'btn-1';

/**
 * Construye el  componente de opciones del modulo de muestras
 * @returns {HTMLDivElement} 
 */
export function OpcTanque(){
    const $opctanque = document.createElement('div');
        $opctanque.classList.add("menu-lateral");
        $opctanque.innerHTML=`
          <div><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z"/></svg></div>
          <button id="btn-1" class="btn-modulo">Tanques</button>
          <button id="btn-2" class="btn-modulo">Nuevo</button>
          <button id="btn-3" class="btn-modulo">Mantenimiento</button>
          <button id="btn-4" class="btn-modulo">Metodo Cloracion</button>
        `;
        /**
         * inicio de funcionalidades
         */
    function iniTanque(){
      const opcModulo = document.querySelector('.menu-lateral');
        opcModulo.addEventListener('click',(e)=>{
          if(e.target && e.target.tagName === 'BUTTON'){
            mostrarComponente(e.target.id);
            }
        })     
      mostrarComponente(BTN_1);
    }
    /**
    * Temporizador para inicio de funcionalidades
    */
    setTimeout(()=>iniTanque(),100);
    return $opctanque;
}
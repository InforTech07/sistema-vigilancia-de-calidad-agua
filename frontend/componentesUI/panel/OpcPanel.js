"use strict";
//@ts-check
/**
 * Opciones del modulo Panel
 * @module OpcPanel - opciones
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
export function OpcPanel(){
  const $opcpanel = document.createElement('div');
        $opcpanel.classList.add("menu-lateral");
        $opcpanel.innerHTML=`
                    <h1>Opciones</h1>
                    <button id="btn-1" class="btn-modulo">Institución</button>
                    <button id="btn-2" class="btn-modulo">App Movil</button>
                    <button id="btn-3" class="btn-modulo">Publicaciones</button>
                    <button id="btn-4" class="btn-modulo">Copia de Seguridad</button>
        `;
        /**
         * inicio de funcionalidades
         */
  function iniPanel(){
    const opcModulo = document.querySelector('.menu-lateral');
      opcModulo.addEventListener('click',(e)=>{
        if(e.target && e.target.tagName === 'BUTTON'){
          mostrarComponente(e.target.id);
          }
        })     
    mostrarComponente(BTN_1);
  }
  setTimeout(()=>iniPanel(),100);
  return $opcpanel;
}
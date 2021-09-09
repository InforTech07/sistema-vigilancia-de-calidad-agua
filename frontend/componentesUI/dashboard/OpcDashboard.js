"use strict";
//@ts-check
/**
 * Opciones del modulo Dashboard
 * @module OpcDashboard - opciones
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
export function OpcDashboard(){
  const $opcdashboard = document.createElement('div');
  $opcdashboard.classList.add("menu-lateral");
  $opcdashboard.innerHTML=`
        <div><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M3,11h8V3H3V11z M5,5h4v4H5V5z"/><path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z"/><path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z"/><polygon points="18,13 16,13 16,16 13,16 13,18 16,18 16,21 18,21 18,18 21,18 21,16 18,16"/></g></g></svg></div>
        <button id="btn-1" class="btn-modulo">HILO ACTUAL</button>
        <button id="btn-2" class="btn-modulo">HISTORIAL</button>
  `;
        /**
         * inicio de funcionalidades
         * @returns {void} - funcionalidades de navegacion entre componentes
         */
        function iniDashboard(){
          const opcModulo = document.querySelector('.menu-lateral');
          opcModulo.addEventListener('click',(e)=>{
            if(e.target && e.target.tagName === 'BUTTON'){
              mostrarComponente(e.target.id);
            }
          })     
         mostrarComponente(BTN_1);
        }
        setTimeout(()=>iniDashboard(),100);
        return $opcdashboard;
}
"use strict";
//@ts-check
/**
 * Opciones del modulo de muestras
 * @module OpcMuestras - opciones
 * @author kevin-pilo-umg 
 * @copyright - ksksue
 * @version 1.0
 */

import {mostrarComponente} from '../utilidades/MostrarComponente.js';
/**
 * 
 * @type {string} - id de paginas
 */
const PAGINA_1= 'pg1';
const PAGINA_2= 'pg2';
const PAGINA_3= 'pg3';
const PAGINA_4= 'pg4';
const BTN_1='btn-1';
const BTN_2='btn-2';
const BTN_3='btn-3';
const BTN_4='btn-4';


/**
 * Construye el  componente de opciones del modulo de muestras
 * @returns {HTMLDivElement} 
 */
export function OpcMuestra(){
  const $opcmuestra = document.createElement('div');
    $opcmuestra.classList.add("menu-lateral");
    $opcmuestra.innerHTML=`
      <h1>Opciones</h1>
      <button id="btn-1" class="btn-modulo">muestra1</button>
      <button id="btn-2" class="btn-modulo">muestra2</button>
      <button id="btn-3" class="btn-modulo">muestra3</button>
      <button id="btn-4" class="btn-modulo">muestra4</button>
      `;
    /**
     * inicio de funcionalidades
     * @returns {void}
     */
  function iniMuestra(){
    document.getElementById(BTN_1).addEventListener('click',()=>mostrarComponente(PAGINA_1,BTN_1));
    document.getElementById(BTN_2).addEventListener('click',()=>mostrarComponente(PAGINA_2,BTN_2));     
    document.getElementById(BTN_3).addEventListener('click',()=>mostrarComponente(PAGINA_3,BTN_3));
    document.getElementById(BTN_4).addEventListener('click',()=>mostrarComponente(PAGINA_4,BTN_4));
    mostrarComponente(PAGINA_1,BTN_1)
  }
  setTimeout(()=>iniMuestra(),100);
  return $opcmuestra;
}
"use strict";
//@ts-check
/**
 * Opciones del modulo Muestra
 * @module OpcMuestras - opciones
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
export function OpcMuestra(){
  const $opcmuestra = document.createElement('div');
    $opcmuestra.classList.add("menu-lateral");
    $opcmuestra.innerHTML=`
      <div><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z"/></svg></div>
      <button id="btn-1" class="btn-modulo">Hilos</button>
      <button id="btn-2" class="btn-modulo">Nuevo Hilo</button>
      <button id="btn-3" class="btn-modulo">Ingreso Muestra</button>
      <button id="btn-4" class="btn-modulo">Tipo Muestra</button>
      `;
    /**
     * inicio de funcionalidades
     * @returns {void}
     */
  function iniMuestra(){
    const opcModulo = document.querySelector('.menu-lateral');
      opcModulo.addEventListener('click',(e)=>{
        if(e.target && e.target.tagName === 'BUTTON'){
          mostrarComponente(e.target.id);
        }
      })     
      mostrarComponente(BTN_1);
  }
  setTimeout(()=>iniMuestra(),100);
  return $opcmuestra;
}
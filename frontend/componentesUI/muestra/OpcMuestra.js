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
      <h1>Opciones</h1>
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
"use strict";
//@ts-check
/**
 * Opciones del modulo Ayuda
 * @module OpcAyuda - opciones
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
export function OpcAyuda(){
  const $opcayuda = document.createElement('div');
        $opcayuda.classList.add("menu-lateral");
        $opcayuda.innerHTML=`
                    <h1>Opciones</h1>
                    <button id="btn-1" class="btn-modulo">Ayuda1</button>
                    <button id="btn-2" class="btn-modulo">Ayuda2</button>
                    <button id="btn-3" class="btn-modulo">Ayuda3</button>
                    <button id="btn-4" class="btn-modulo">Ayuda4</button>
        `;
        /**
         * inicio de funcionalidades
         */
  function iniAyuda(){
    const opcModulo = document.querySelector('.menu-lateral');
      opcModulo.addEventListener('click',(e)=>{
        if(e.target && e.target.tagName === 'BUTTON'){
          mostrarComponente(e.target.id);
        }            
      })     
    mostrarComponente(BTN_1);
  } 
  setTimeout(()=>iniAyuda(),100);
  return $opcayuda;
}
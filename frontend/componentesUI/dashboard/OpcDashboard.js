"use strict";
//@ts-check
/**
 * Opciones del modulo de muestras
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
const PAGINA_1= 'pg1';
const PAGINA_2= 'pg2';
const BTN_1 = 'btn-1';
const BTN_2 = 'btn-2';

/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} opciones del modulo y funcionalidades
 */
export function OpcDashboard(){
  const $opcdashboard = document.createElement('div');
  $opcdashboard.classList.add("menu-lateral");
  $opcdashboard.innerHTML=`
        <h1>Opciones</h1>
        <button id="btn-1" class="btn-modulo">HILO ACTUAL</button>
        <button id="btn-2" class="btn-modulo">HISTORIAL</button>
  `;
        /**
         * inicio de funcionalidades
         * @returns {void} - funcionalidades de navegacion entre componentes
         */
        function iniDashboard(){
          document.getElementById(BTN_1).addEventListener('click',()=>mostrarComponente(PAGINA_1,BTN_1));
          document.getElementById(BTN_2).addEventListener('click',()=>mostrarComponente(PAGINA_2,BTN_2));     
          mostrarComponente(PAGINA_1,BTN_1);
        }
        setTimeout(()=>iniDashboard(),100);
        return $opcdashboard;
}
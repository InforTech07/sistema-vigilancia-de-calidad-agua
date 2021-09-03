"use strict";
//@ts-check

/**
 * Mostrar, ocultar  paginas y resaltar opcion 
 * @module Constantes
 * @author nombre del 
 * @copyright - ksksue
 * @version 1.0
 */

/**
 * valores de pagina
 * @type {string} - clase de pagina
 */
const CLASE_PAGINA = '.pagina';
const CLASE_BTN= '.btn-modulo';
const PRIMER_COLOR = "var(--primer-color)";
const QUINTO_COLOR = 'var(--quinto-color)';
const TEXT_LIGHT = 'var(--texto-color-light)';
const TITULO_COLOR ='var(--titulo-color)';

/**
* muestra la pagina seleccinada
* @param {string} pag id de la pagina a mostrar
* @returns {void} -actualiza el display del elemento
*/
function mostrarPagina(pag){
    document.querySelectorAll(CLASE_PAGINA).forEach(div=>{
      div.style.display = "none";
      })
        document.querySelector(`#${pag}`).style.display="block";
}

/**
* actualiza el color de la opcion seleccionada
* @param {string} btn id del boton seleccionado
* @returns {void} - actuliza la apariencia del boton
*/
function resaltarOpcion(btn){          
    document.querySelectorAll(CLASE_BTN).forEach(button=>{
      button.style.backgroundColor= QUINTO_COLOR;
        button.style.color=TEXT_LIGHT;
        })
      let btnSelect = document.querySelector(`#${btn}`)
        btnSelect.style.backgroundColor= PRIMER_COLOR;
        btnSelect.style.color= TITULO_COLOR;
}

export function mostrarComponente(pag,btn) {
  mostrarPagina(pag);
  resaltarOpcion(btn);
}
"use strict";
//@ts-check

/**
 * Mostrar, ocultar  paginas y resaltar opcion 
 * @module MostrarComponente
 * @author nombre del 
 * @copyright - ksksue
 * @version 1.0
 */

/**
 * constantes
 * @type {string} - claese y id de paginas, valores prefedifinidos
 */
const CLASE_PAGINA = '.pagina';
const CLASE_BTN= '.btn-modulo';
const PRIMER_COLOR = "var(--primer-color)";
const QUINTO_COLOR = 'var(--quinto-color)';
const TEXT_LIGHT = 'var(--texto-color-light)';
const TITULO_COLOR ='var(--titulo-color)';
const PAGINA_1= 'pg1';
const PAGINA_2= 'pg2';
const PAGINA_3= 'pg3';
const PAGINA_4= 'pg4';
const BTN_1='btn-1';
const BTN_2='btn-2';
const BTN_3='btn-3';
const BTN_4='btn-4';
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

/**
* manejador del modulo
* @param {string} btn id del boton seleccionado
* @returns {void} - componente seleccionado
*/

export function mostrarComponente(btn) {
  switch (btn) {
    case BTN_1:
      mostrarPagina(PAGINA_1);
      resaltarOpcion(BTN_1);
      break;
    case BTN_2:
      mostrarPagina(PAGINA_2);
      resaltarOpcion(BTN_2);
      break;
    case BTN_3:
      mostrarPagina(PAGINA_3);
      resaltarOpcion(BTN_3);
      break;
    case BTN_4:
      mostrarPagina(PAGINA_4);
      resaltarOpcion(BTN_4);
      break;
    default:
      mostrarPagina(PAGINA_1);
      resaltarOpcion(BTN_1);
      break;
  } 
}
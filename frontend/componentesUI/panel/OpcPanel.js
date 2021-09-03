"use strict";
//@ts-check
import {mostrarComponente} from '../utilidades/MostrarComponente.js';
const PAGINA_1= 'pg1';
const PAGINA_2= 'pg2';
const PAGINA_3= 'pg3';
const PAGINA_4= 'pg4';
const BTN_1='btn-1';
const BTN_2='btn-2';
const BTN_3='btn-3';
const BTN_4='btn-4';
/**
 * creacion de las opciones que tendra el modulo panel
 * @returns {void} opciones del modulo y funcionalidades
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
            document.getElementById(BTN_1).addEventListener('click',()=>mostrarComponente(PAGINA_1,BTN_1));
            document.getElementById(BTN_2).addEventListener('click',()=>mostrarComponente(PAGINA_2,BTN_2));     
            document.getElementById(BTN_3).addEventListener('click',()=>mostrarComponente(PAGINA_3,BTN_3));
            document.getElementById(BTN_4).addEventListener('click',()=>mostrarComponente(PAGINA_4,BTN_4));
            mostrarComponente(PAGINA_1,BTN_1);
        }
        setTimeout(()=>iniPanel(),100);
        return $opcpanel;
}
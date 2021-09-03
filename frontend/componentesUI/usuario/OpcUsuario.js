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
 * creacion de las opciones que tendra el modulo ayuda
 * @returns {void} opciones del modulo y funcionalidades
 */
export function OpcUsuario(){
    const $opcusuario = document.createElement('div');
        $opcusuario.classList.add("menu-lateral");
        $opcusuario.innerHTML=`
                    <h1>Opciones</h1>
                    <button id="btn-1" class="btn-modulo">usuario1</button>
                    <button id="btn-2" class="btn-modulo">usuari2</button>
                    <button id="btn-3" class="btn-modulo">usuario3</button>
                    <button id="btn-4" class="btn-modulo">usuario4</button>
        `;
        /**
         * inicio de funcionalidades
         */
        function iniUsuario(){
            document.getElementById(BTN_1).addEventListener('click',()=>mostrarComponente(PAGINA_1,BTN_1));
            document.getElementById(BTN_2).addEventListener('click',()=>mostrarComponente(PAGINA_2,BTN_2));     
            document.getElementById(BTN_3).addEventListener('click',()=>mostrarComponente(PAGINA_3,BTN_3));
            document.getElementById(BTN_4).addEventListener('click',()=>mostrarComponente(PAGINA_4,BTN_4));
            mostrarComponente(PAGINA_1,BTN_1);
        }
        /**
         * Temporizador para inicio de funcionalidades
         */
        setTimeout(()=>iniUsuario(),100);
        return $opcusuario;
}
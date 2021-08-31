"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo ayuda
 * @returns {void} opciones del modulo y funcionalidades
 */
export function OpcTanque(){
    const $opctanque = document.createElement('div');
        $opctanque.classList.add("menu-lateral");
        $opctanque.innerHTML=`
                    <h1>Opciones</h1>
                    <button id="btn-1" class="btn-modulo">tanque1</button>
                    <button id="btn-2" class="btn-modulo">tanque2</button>
                    <button id="btn-3" class="btn-modulo">tanque3</button>
                    <button id="btn-4" class="btn-modulo">tanque4</button>
        `;
        /**
         * inicio de funcionalidades
         */
        function iniTanque(){
            const btn1 = document.getElementById('btn-1');
            const btn2 = document.getElementById('btn-2');
            const btn3 = document.getElementById('btn-3');
            const btn4 = document.getElementById('btn-4');
            /**
             * muestra la pagina seleccinada
             * @param {string} pag id de la pagina a mostrar
             */
            function verPagina(pag){
                document.querySelectorAll('.pagina').forEach(div=>{
                    div.style.display = "none";
                })
                document.querySelector(`#${pag}`).style.display="block";
            }
            /**
             * actualiza el color de la opcion seleccionada
             * @param {string} btn id del boton seleccionado
             */
            function marcarOpcion(btn){
                
                document.querySelectorAll('.btn-modulo').forEach(button=>{
                    button.style.backgroundColor="var(--quinto-color)";
                    button.style.color="var(--texto-color-light)";
                })
                 let btnSelect = document.querySelector(`#${btn}`)
                 btnSelect.style.backgroundColor="var(--primer-color)";
                 btnSelect.style.color="var(--titulo-color)";
            }
            /**
             * @event 
             */
            btn1.addEventListener('click',()=>{
                verPagina('pg1')
                marcarOpcion('btn-1')
            })
            /**
             * @event 
             */
            btn2.addEventListener('click',()=>{
                verPagina('pg2')
                marcarOpcion('btn-2')
            })
            /**
             * @event 
             */
            btn3.addEventListener('click',()=>{
                verPagina('pg3')
                marcarOpcion('btn-3')
            })
            /**
             * @event 
             */
            btn4.addEventListener('click',()=>{
                verPagina('pg4')
                marcarOpcion('btn-4')
            })
            verPagina('pg1')    
            marcarOpcion('btn-1')
        }
        /**
         * Temporizador para inicio de funcionalidades
         */
        setTimeout(()=>iniTanque(),100);
        return $opctanque;
}
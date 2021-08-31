"use strict";
//@ts-check
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
         */
        function iniDashboard(){
            const btn1 = document.getElementById('btn-1');
            const btn2 = document.getElementById('btn-2');
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
            verPagina('pg1')    
            marcarOpcion('btn-1')
        }
        /**
         * Temporizador para inicio de funcionalidades
         */
        setTimeout(()=>iniDashboard(),100);
        return $opcdashboard;
}
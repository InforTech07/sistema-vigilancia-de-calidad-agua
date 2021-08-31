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
        function iniPanel(){
            const btn1 = document.getElementById('btn-1');
            const btn2 = document.getElementById('btn-2');
            const btn3 = document.getElementById('btn-3');
            const btn4 = document.getElementById('btn-4');
            
            function verPagina(pag){
                document.querySelectorAll('.pagina').forEach(div=>{
                    div.style.display = "none";
                })
                document.querySelector(`#${pag}`).style.display="block";
            }

            function marcarOpcion(btn){
                
                document.querySelectorAll('.btn-modulo').forEach(button=>{
                    button.style.backgroundColor="var(--quinto-color)";
                    button.style.color="var(--texto-color-light)";
                })
                 let btnSelect = document.querySelector(`#${btn}`)
                 btnSelect.style.backgroundColor="var(--primer-color)";
                 btnSelect.style.color="var(--titulo-color)";
            }
            btn1.addEventListener('click',()=>{
                verPagina('pg1')
                marcarOpcion('btn-1')
            })
            btn2.addEventListener('click',()=>{
                verPagina('pg2')
                marcarOpcion('btn-2')
            })
            btn3.addEventListener('click',()=>{
                verPagina('pg3')
                marcarOpcion('btn-3')
            })
            btn4.addEventListener('click',()=>{
                verPagina('pg4')
                marcarOpcion('btn-4')
            })
            verPagina('pg1')    
            marcarOpcion('btn-1')
        }
        setTimeout(()=>iniPanel(),100);
        return $opcpanel;
}
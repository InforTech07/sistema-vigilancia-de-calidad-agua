export function OpcPanel(){
    const $opcpanel = document.createElement('div');
        $opcpanel.classList.add("menu-lateral");
        $opcpanel.innerHTML=`
                    <h1>Opciones</h1>
                    <button id="btn-1">opcion 1</button>
                    <button id="btn-2">opcion 2</button>
                    <button id="btn-3">opcion 3</button>
                    <button id="btn-4">opcion 4</button>
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
            btn1.addEventListener('click',()=>verPagina('pg1'))
            btn2.addEventListener('click',()=>verPagina('pg2'))
            btn3.addEventListener('click',()=>verPagina('pg3'))
            btn4.addEventListener('click',()=>verPagina('pg4'))
        }
        setTimeout(()=>iniPanel(),100);
        return $opcpanel;
}
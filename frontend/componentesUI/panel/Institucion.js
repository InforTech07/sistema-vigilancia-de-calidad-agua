export function Institucion(){
    const $institucion = document.createElement('div');
        $institucion.classList.add("pagina");
        $institucion.setAttribute('id',"pg1");
        $institucion.setAttribute('style',"display:block;")
        $institucion.innerHTML=`
        <h2>Pagina de institucion</h2>
        `;
        return $institucion;
}
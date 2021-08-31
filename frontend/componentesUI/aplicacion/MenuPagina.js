export function MenuPagina() {
    const $menu=document.createElement('nav');
    $menu.classList.add('menu-pag')
    $menu.innerHTML=`
        <ul>
            <li><a href="#/inicio">INICIO</a></li>
            <li><a href="#/inicio">VISION</a></li>
            <li><a href="#/inicio">MISION</a></li>
            <li><a href="#/inicio">LABORES</a></li>
        </ul>
        `;
    return $menu; 
}
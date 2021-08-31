export function MenuApp() {
    const $menu=document.createElement('nav');
    $menu.classList.add('menu-app');
    $menu.setAttribute('id',"menu-lateral");
    $menu.innerHTML=`
        <ul>
            <li><a href="#/app/tanque">TANQUE</a></li>
            <li><a href="#/app/muestra">MUESTRA</a></li>
            <li><a href="#/app/dashboard">DASHBOARD</a></li>
            <li><a href="#/app/reporte">REPORTE</a></li>
            <li><a href="#/app/usuario">USUARIO</a></li>
            <li><a href="#/app/panel">PANEL</a></li>
            <li><a href="#/app/ayuda">AYUDA</a></li>
        </ul>
        `;
    return $menu; 
}
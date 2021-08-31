export function MenuApp(opcActive) {
    const $menu=document.createElement('nav');
    $menu.classList.add('menu-app');
    $menu.setAttribute('id',"menu-lateral");
    $menu.innerHTML=`
        <ul>
            <li><a id="m-tanque" href="#/app/tanque">TANQUE</a></li>
            <li><a id="m-muestra" href="#/app/muestra">MUESTRA</a></li>
            <li><a id="m-dashboard" href="#/app/dashboard">DASHBOARD</a></li>
            <li><a id="m-reporte" href="#/app/reporte">REPORTE</a></li>
            <li><a id="m-usuario" href="#/app/usuario">USUARIO</a></li>
            <li><a id="m-panel" href="#/app/panel">PANEL</a></li>
            <li><a id="m-ayuda" href="#/app/ayuda">AYUDA</a></li>
        </ul>
        `;
    function iniMenuApp(){
        document.querySelector(`#${opcActive}`).style.borderBottom="2px solid var(--primer-color)";
    }
    setTimeout(()=>iniMenuApp(),100);    
    return $menu; 
}
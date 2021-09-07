export function Encabezado() {
    const $Encabezado=document.createElement('head');
    $Encabezado.classList.add('encabezado')
    $Encabezado.innerHTML=`
        <div>
            <img src="./assets/img/logo.png" alt="logo">
        </div>
        <div>
            <h1>Municipalidad de San José Chacayá<br>Oficina de agua<br>
            Sistema de vigiliancia de calidad de agua</h1>
        </div>
        <div>
            <button id="btn-irlogin" class="primer-btn">Entrar</button>
            <button id="btn-menu" class="primer-btn">Menu</button>
        </div>
        `;
    function irLogin(){
        const btn = document.getElementById('btn-irlogin');

        btn.addEventListener('click',()=>{
            console.log('presionando');
            location.href= '#/app/login'
        })

        const btnMenu = document.getElementById('btn-menu');
        btnMenu.addEventListener('click',()=>{
            let vleft = document.querySelector('.menu-app').style.left;
            if (vleft == "100%") {
                document.querySelector('.menu-app').style.left=0;
            }else{
                document.querySelector('.menu-app').style.left="100%";
            }
        })
    }
    setTimeout(()=>irLogin(),100);
    return $Encabezado; 
}
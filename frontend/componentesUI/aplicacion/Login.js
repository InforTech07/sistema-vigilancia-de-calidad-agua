export function Login() {
    const $login = document.createElement('section');
    $login.classList.add('contenedor-login')
    $login.innerHTML=`
    <div>
      <form class="login">
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <button id="btn-ingresar">Ingresar</button>
      </form>
    </div>
    <div>
      <img src="./assets/img/logo.png" alt="">
    </div> 
    `;

    function iniLogin() {
        const btn = document.getElementById('btn-ingresar');

        btn.addEventListener('click',()=>{
            console.log('presionando');
            location.href= '#/app/dashboard'
        })

        
    }
    setTimeout(()=>iniLogin(),100);

    return $login;
}
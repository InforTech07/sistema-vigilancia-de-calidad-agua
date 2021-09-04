export function Inicio() {
    const $Inicio = document.createElement('div');
    $Inicio.classList.add('inicio')
    $Inicio.innerHTML=`
      <section class="contenedor-progreso">
        <h2>progreso del hilo</h2>
        <div>
          <img src="./assets/img/widgets_black_24dp.svg" alt="">
        </div>
      </section>
      <section id="#/vision-mision" class="contenedor-vision-mision">
        <div class="vision">
          <div>
            <h2>Vision</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus odit aliquam veniam, magni ratione facere odio itaque recusandae blanditiis iure iusto? Minima itaque natus qui praesentium accusantium veniam iure!
            </p>
          </div>
          <div>
            <img src="./assets/img/grid_view_black_24dp.svg" alt="">
          </div>  
        </div>
        <div class="mision">
          <div>
            <h2>Mision</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus odit aliquam veniam, magni ratione facere odio itaque recusandae blanditiis iure iusto? Minima itaque natus qui praesentium accusantium veniam iure!
            </p>
          </div>
          <div>
            <img src="./assets/img/grid_view_black_24dp.svg" alt="">
          </div>  
        </div>
      </section>
      <section id="#/publicacion" class="contenedor-publicacion">
        <h2>Mejoras y mantenimientos</h2>
        <div class="publicaciones">
         <div class="publicacion">
            <h3>titulo</h3>
            <img src="./assets/img/grid_view_black_24dp.svg" alt="">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga nihil non illum praesentium aliquam assumenda debitis repellendus porro! Ab itaque exercitationem tempore magni aliquid natus similique voluptatem ducimus sed.
            </p>
            <span>Fecha: 21/02/2021</span>
        </div>
        <div class="publicacion">
            <h3>titulo</h3>
            <img src="./assets/img/grid_view_black_24dp.svg" alt="">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga nihil non illum praesentium aliquam assumenda debitis repellendus porro! Ab itaque exercitationem tempore magni aliquid natus similique voluptatem ducimus sed.
            </p>
            <span>Fecha: 21/02/2021</span>
        </div>
        <div class="publicacion">
            <h3>titulo</h3>
            <img src="./assets/img/grid_view_black_24dp.svg" alt="">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga nihil non illum praesentium aliquam assumenda debitis repellendus porro! Ab itaque exercitationem tempore magni aliquid natus similique voluptatem ducimus sed.
            </p>
            <span>Fecha: 21/02/2021</span>
        </div>
        <div class="publicacion">
            <h3>titulo</h3>
            <img src="./assets/img/grid_view_black_24dp.svg" alt="">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga nihil non illum praesentium aliquam assumenda debitis repellendus porro! Ab itaque exercitationem tempore magni aliquid natus similique voluptatem ducimus sed.
            </p>
            <span>Fecha: 21/02/2021</span>
        </div>
        <div class="publicacion">
            <h3>titulo</h3>
            <img src="./assets/img/grid_view_black_24dp.svg" alt="">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga nihil non illum praesentium aliquam assumenda debitis repellendus porro! Ab itaque exercitationem tempore magni aliquid natus similique voluptatem ducimus sed.
            </p>
            <span>Fecha: 21/02/2021</span>
        </div>
        <div class="publicacion">
            <h3>titulo</h3>
            <img src="./assets/img/grid_view_black_24dp.svg" alt="">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fuga nihil non illum praesentium aliquam assumenda debitis repellendus porro! Ab itaque exercitationem tempore magni aliquid natus similique voluptatem ducimus sed.
            </p>
            <span>Fecha: 21/02/2021</span>
        </div>
        </div>
       </section><br>
      <footer>
       <h3>pie de pagina</h3>
      </footer>
        `;
    return $Inicio; 
}
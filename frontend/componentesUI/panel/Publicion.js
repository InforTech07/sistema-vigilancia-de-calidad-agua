export function Publicacion(){
    const $publicacion = document.createElement('div');
        $publicacion.classList.add("pagina");
        $publicacion.setAttribute('id',"pg3");
        $publicacion.setAttribute('style',"display:none;")
        $publicacion.innerHTML=`
        <section class="contenedor-panel">
        <div class="datos-publicaciones">
          <h3>Publicaciones</h3>
          <hr>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th>Fecha Publicacion</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th colspan='3'>Publicaciones</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>1</td>
                <td>Limipieza</td>
                <td>Limpieza de tanques</td>
                <td>12/07/2021</td>
                <td>activo</td>
                <td>
                  <a class='button' href='#'>opcion</a>
                  <a class='button' href='#'>opcion2</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Limipieza</td>
                <td>Limpieza de tanques</td>
                <td>12/07/2021</td>
                <td>activo</td>
                <td>
                  <a class='button' href='#'>opcion</a>
                  <a class='button' href='#'>opcion2</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Limipieza</td>
                <td>Limpieza de tanques</td>
                <td>12/07/2021</td>
                <td>activo</td>
                <td>
                  <a class='button' href='#'>opcion</a>
                  <a class='button' href='#'>opcion2</a>
                </td>
              </tr>
            </tbody>
        </table>
        </div>
        <div class="nueva-publicacion">
          <h3>Nueva Publicacion</h3>
          <hr>
          <form action="">
            <p><label for="" class="input-label">Titulo:</label>
              <input type="text" class="input-dato" id="" placeholder="Nombre institución" required=""/></p>
              <p><label for="" class="input-label">Fecha:</label>
                <input type="date" class="input-dato" id="" placeholder="Full name" required=""/></p>
            <p class="contenedor-archivo">
                <label for="">Imagen:</label>
                <label class="input-archivo"> 
                <input type="file" id="file" aria-label="archivo">
                <span class="input-archivo-personalizado"></span></label></p>
          </form>
          <div>
            <p><label for="" class="input-label">Descripción:</label>
            <textarea name="" id="" cols="50" rows="5" placeholder="Descripcion del la publicacion"></textarea></p>
          </div>
          <div class="botones-institucion">
            <p><button class="primer-btn">Guardar</button></p> 
          </div>
        </div> 
      </section>
        `;
        return $publicacion;
}
"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function TipoMuestra(){
    const $tipomuestra = document.createElement('div');
        $tipomuestra.classList.add("pagina");
        $tipomuestra.setAttribute('id',"pg4");
        $tipomuestra.setAttribute('style',"display:none;")
        $tipomuestra.innerHTML=`
        <section class="contenedor-muestras">
        <div>
          <h2>Nuevo tipo de muestra</h2>
          <hr>
          <form action="" class="form-nuevo-tipo-muestra">
            <p><label for="" class="input-label">Nombre:</label>
              <input type="text" class="input-dato" id="" placeholder="Full name" required=""/></p>
            <p><label for="" class="input-label">Descripcion:</label>
              <input type="text" class="input-dato" id="" placeholder="Full name" required=""/></p>
              <p>
              <p><label for="" class="input-label"></label>
              <button class="primer-btn">Guardar</button></p>
          </form>
        </div>
        <div>
          <h2>Tipos de muestras</h2>
          <hr>
            <table>
              <thead>
                <tr>
                  <th>nombre</th>
                  <th>correo</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan='2'>tipos de muestras</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Iacob Geaorgescu</td>
                  <td>e-mail@test-email.com</td>
                  <td>
                    <a class='button' href='#'>opcion</a>
                    <a class='button' href='#'>opcion2</a>
                  </td>
                </tr>
                <tr>
                <td>Iacob Geaorgescu</td>
                <td>e-mail@test-email.com</td>
                <td>
                  <a class='button' href='#'>opcion</a>
                  <a class='button' href='#'>opcion2</a>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </section>
        `;
        return $tipomuestra;
}
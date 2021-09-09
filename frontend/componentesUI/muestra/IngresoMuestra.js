"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function IngresoMuestra(){
    const $ingresomuestra = document.createElement('div');
        $ingresomuestra.classList.add("pagina");
        $ingresomuestra.setAttribute('id',"pg3");
        $ingresomuestra.setAttribute('style',"display:none;")
        $ingresomuestra.innerHTML=`
        <section class="contenedor-muestras">
        <div>
          <h3>Ingreso de muestra</h3>
          <hr>
          <form action="" class="form-ingreso-muestra">
          <p>
            <label class="input-label" for="">Tipo de muestra</label>
            <select class="input-opciones" id="">
              <option value="Opcion 1">Opcion 1</option>
              <option value="Opcion 2">Opcion 2</option>
              <option value="Opcion 3">Opcion 3</option>
              <option value="Opcion 4">Opcion 4</option>
              <option value="Opcion 5">Opcion 5</option>
            </select>
          </p>
          <p><label for="" class="input-label">Punto de muestra:</label>
            <input type="text" class="input-dato" id="" placeholder="Hogar,tanque.." required=""/></p>
          <p><label for="" class="input-label">PH:</label>
            <input type="text" class="input-dato" id="" placeholder="ph" required=""/></p>
          <p><label for="" class="input-label">Cloro recidual:</label>
            <input type="text" class="input-dato" id="" placeholder="Full name" required=""/></p>
          <p><label for="" class="input-label">Presion de agua:</label>
            <input type="text" class="input-dato" id="" placeholder="Full name" required=""/></p>  
          </form>
          <div class="btn-ingreso-muestra">
          <button class="primer-btn">Guardar</button>
          <button class="segundo-btn">Nueva Muestra</button>
          </div>
          </div>
          <div>
          <h2>Historial de muestras</h2>
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
              <th colspan='2'>Historial Muestras</th>
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
        return $ingresomuestra;
}
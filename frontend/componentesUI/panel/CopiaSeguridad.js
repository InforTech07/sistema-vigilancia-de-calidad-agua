export function CopiaSeguridad(){
    const $copiaseguridad = document.createElement('div');
        $copiaseguridad.classList.add("pagina");
        $copiaseguridad.setAttribute('id',"pg4");
        $copiaseguridad.setAttribute('style',"display:none;")
        $copiaseguridad.innerHTML=`
        <section class="contenedor-panel">
            <div class="nueva-backup">
                <h3>Nueva copia de seguridad</h3>
                <hr>
            <form action="">
                <p><label for="" class="input-label">Descripcion:</label>
                    <input type="text" class="input-dato" id="" placeholder="Full name" required=""/></p>
                <p><label for="" class="input-label"></label>
                    <button class="tercer-btn">Generar copia de seguridad</button></p> 
            </form>  
            </div>
            <div>
                <h3>Historial de copias de seguridad</h3>
                <hr>
                <table>
                    <thead>
                        <tr>
                        <th>No.</th>
                        <th>Copia seguridad</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                    <th colspan='4'>Historial de copias de seguridad</th>
                    </tr>
                </tfoot>
            <tbody>
              <tr>
                <td>1</td>
                <td>tatal base datos</td>
                <td>12/02/2021</td>
                <td>8:00am</td>
              </tr>
              <tr>
                <td>2</td>
                <td>tatal base datos</td>
                <td>12/02/2021</td>
                <td>8:00am</td>
              </tr>
              <tr>
                <td>3</td>
                <td>tatal base datos</td>
                <td>12/02/2021</td>
                <td>8:00am</td>
              </tr>
            </tbody>
        </table>       
         </div>
    </section>
        `;
        return $copiaseguridad;
}
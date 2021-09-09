"use strict";
//@ts-check
/**
 * div con los componentes del modulo
 * @returns {HTMLDivElement}
 */
export function HiloActual(){
    const $hiloactual = document.createElement('div');
        $hiloactual.classList.add("pagina");
        $hiloactual.setAttribute('id',"pg1");
        $hiloactual.setAttribute('style',"display:block;")
        $hiloactual.innerHTML=`
        <section class="contenedor-dashboard">
            <h3>Hilo actual de muestras</h3>
            <h3>Del: 21/05/2021 Al: 28/05/2021</h3>
            <hr>
            <div class="contenedor-grafica-dash">
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
                <div class="card-progreso-dash">
                    <h3>tanque no. 1</h3>
                <div class="elemento-progreso">
                    <p class="progreso"><label for="">Tanque #1</label><progress min="0" max="100" value="50"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 1</label><progress min="0" max="100" value="25"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 2</label><progress min="0" max="100" value="65"></progress><label for="">75%</label></p>
                    <p class="progreso"><label for="">Muestra 3</label><progress min="0" max="100" value="15"></progress><label for="">75%</label></p>
                </div>
                    <h3>porcentaje 50%</h3>
                </div>
            </div>
  </section>
        `;
        return $hiloactual;
}
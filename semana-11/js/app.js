import { obtenerGastos, guardarGasto } from './service/gsatosApi.js'
const btnAbrirModal = document.querySelector('#btnAbrirModal');
const btnCerrarModal = document.querySelector('#btnCerrarModal');
const btnCancelar = document.querySelector('#btnCancelar');
const modalGasto = document.querySelector('#modalGasto');

const formGasto = document.querySelector('#formGasto');
const inputDescripcion = document.querySelector('#descripcion');
const inputMonto = document.querySelector('#monto');

const listaGastos = document.querySelector('#listaGastos');
const estadoVacio = document.querySelector('#estadoVacio');

let gastos = [];

navigator.serviceWorker.register('./sw.js');

btnAbrirModal.addEventListener('click', abrirModal);
btnCerrarModal.addEventListener('click', cerrarModal);
btnCancelar.addEventListener('click', cerrarModal);

modalGasto.addEventListener('click', (event) => {
    if (event.target === modalGasto) {
        cerrarModal();
    }
});

formGasto.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nuevoGasto = {
        id: Date.now(),
        descripcion: inputDescripcion.value.trim(),
        monto: Number(inputMonto.value)
    };

    const resultado = await guardarGasto( nuevoGasto );

    gastos.push(nuevoGasto);
    renderGastos();

    formGasto.reset();
    cerrarModal();
});

function abrirModal() {
    modalGasto.classList.add('active');
    inputDescripcion.focus();
}

function cerrarModal() {
    modalGasto.classList.remove('active');
}

function renderGastos() {
    listaGastos.innerHTML = '';

    estadoVacio.style.display = gastos.length === 0 ? 'block' : 'none';

    gastos.forEach(gasto => {
        const li = document.createElement('li');
        li.classList.add('expense-item');

        li.innerHTML = `
        <div>
            <strong>${gasto.descripcion}</strong>
            <small>ID: ${gasto.id}</small>
        </div>

        <span>$${gasto.monto}</span>
        `;

        listaGastos.appendChild(li);
    });
}

async function iniciarApp() {
    gastos = await obtenerGastos();
    renderGastos();
}

iniciarApp();
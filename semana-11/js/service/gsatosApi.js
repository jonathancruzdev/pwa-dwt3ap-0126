import { API_URL } from '../config/api.js';


export async function obtenerGastos() {
  try {

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Error al obtener gastos');
    }

    return await response.json();

  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function guardarGasto(gasto) {
  try {

    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(gasto)
    });

    if (!response.ok) {
      throw new Error('Error al guardar gasto');
    }

    return await response.json();

  } catch (error) {
    console.error(error);

    return {
      ok: false,
      error: error.message
    };
  }
}
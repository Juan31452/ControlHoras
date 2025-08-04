// Tipo para el registro individual de limpieza
export interface JefeLimpieza {
  nombre: string;
  valorHora: number;
}

export interface Registro {
  fecha: string;
  nombrePiso: string;
  jefe: JefeLimpieza;    // aquí usas el objeto completo
  horas: number;
  minutos: number;
  total: number;
}

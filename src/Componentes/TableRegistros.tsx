// TablaRegistros.tsx
import type { Registro } from "../ModeloDatos/RegistroInterface";

interface Props {
  registros: Registro[];
  limpiador: string;
}

export default function TablaRegistros({ registros, limpiador }: Props) {
  const calcularTotalGeneral = () => {
    return registros.reduce((sum, r) => sum + r.total, 0);
  };

  if (registros.length === 0) return null;

  return (
    <div className="bg-secondary p-4 rounded">
      <h5 className="text-center mb-3">Registros de {limpiador}</h5>
      <table className="table table-bordered table-dark table-sm">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Piso</th>
            <th>Horas</th>
            <th>Min</th>
            <th>Valor</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((r, i) => (
            <tr key={i}>
              <td>{r.fecha}</td>
              <td>{r.nombrePiso}</td>
              <td>{r.horas}</td>
              <td>{r.minutos}</td>
              <td>${r.jefe.valorHora.toFixed(2)}</td>
              <td>${r.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-end fw-bold">Total general:</td>
            <td className="fw-bold">${calcularTotalGeneral().toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

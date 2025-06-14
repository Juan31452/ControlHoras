import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Registro } from "./ModeloDatos/RegistroInterface";
import FechaPersonalizada from "./Componentes/FechaPersonalizada";
import NumeroInput from "./Componentes/NumeroInput";
import TextoInput from "./Componentes/TextoInput";
import BotonPersonalizado from "./Componentes/BotonPersonalizado";
import TablaRegistros from "./Componentes/TableRegistros";


export default function App() {
  const [limpiador, setLimpiador] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [nombrePiso, setNombrePiso] = useState<string>("");
  const [horas, setHoras] = useState<number>(0);
  const [minutos, setMinutos] = useState<number>(0);
  const [valorHora, setValorHora] = useState<number>(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const agregarRegistro = () => {
    const totalHoras = horas + minutos / 60;
    const total = totalHoras * valorHora;
    const nuevoRegistro: Registro = {
      fecha,
      nombrePiso,
      horas,
      minutos,
      valorHora,
      total,
    };
    setRegistros([...registros, nuevoRegistro]);

    // Limpiar campos después de agregar
    setFecha("");
    setNombrePiso("");
    setHoras(0);
    setMinutos(0);
    setValorHora(0);
  };

  return (
    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-start bg-dark text-white p-3">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
        <h2 className="text-center mb-4">Registro de horas</h2>

        <form className="bg-secondary p-4 rounded mb-4">
         <TextoInput label="🧹 Limpiador" value={limpiador} onChange={setLimpiador} placeholder="Nombre del limpiador" />

         <hr className="text-white" />

         <FechaPersonalizada value={fecha} onChange={setFecha} />
         <TextoInput label="🏢 Nombre del piso" value={nombrePiso} onChange={setNombrePiso} placeholder="Ej: Piso 1" />

          <div className="mb-3 row">
            <div className="col">
              <NumeroInput label="⏱ Horas" value={horas} onChange={setHoras} min={0} />
            </div>
            <div className="col">
              <NumeroInput label="⏱ Minutos" value={minutos} onChange={setMinutos} min={0} max={59} />
            </div>
          </div>

          <NumeroInput label="💰 Valor por hora" value={valorHora} onChange={setValorHora} min={0} />
         
          <div className="text-center">
            <BotonPersonalizado texto="Agregar registro" onClick={agregarRegistro} />
          </div>
          
        </form>

        <TablaRegistros registros={registros} limpiador={limpiador} />
      </div>
    </div>
  );
}

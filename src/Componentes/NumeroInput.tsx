import React from "react";

interface NumeroInput {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const NumeroInput: React.FC<NumeroInput> = ({ label, value, onChange, min, max }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="number"
        value={value}
        placeholder="0"
        onChange={(e) => onChange(Number(e.target.value))}
        onFocus={(e) => e.target.select()} // Selecciona el contenido al hacer foco
        className="form-control"
        min={min}
        max={max}
      />
    </div>
  );
};

export default NumeroInput;

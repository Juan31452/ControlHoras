import React from "react";

interface FechaPersonalizada {
  value: string;
  onChange: (value: string) => void;
}

const FechaPersonalizada: React.FC<FechaPersonalizada> = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">📅 Fecha</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default FechaPersonalizada;

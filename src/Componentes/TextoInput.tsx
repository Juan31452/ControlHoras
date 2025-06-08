import React from "react";

interface TextoInput {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextoInput: React.FC<TextoInput> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextoInput;

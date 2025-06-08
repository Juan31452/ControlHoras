import React from 'react';

interface BotonPersonalizadoProps {
  /**
   * Texto que se muestra dentro del botón
   */
  texto?: string;
  
  /**
   * Función que se ejecuta al hacer clic en el botón
   */
  onClick?: () => void;
  
  /**
   * Contenido hijo del botón (alternativa al texto)
   */
  children?: React.ReactNode;
  
  /**
   * Indica si el botón está deshabilitado
   */
  disabled?: boolean;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Tipo de botón (button, submit, reset)
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Estilos inline
   */
  style?: React.CSSProperties;
}

const BotonPersonalizado: React.FC<BotonPersonalizadoProps> = ({
  texto,
  onClick,
  children,
  disabled = false,
  className = '',
  type = 'button',
  style,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`boton-estandar ${className}`}
    style={style}
  >
    {texto || children}
  </button>
);

export default BotonPersonalizado;
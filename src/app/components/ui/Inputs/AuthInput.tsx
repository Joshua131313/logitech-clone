import React from "react";
import './AppInput.css'

interface Props {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  type?: string,
  placeholder: string,
  error?: string,
  disabled?: boolean
}

export const AuthInput: React.FC<Props> = (props) => {
  const { 
    value, 
    setValue, 
    type = "text", 
    placeholder, 
    error, 
    disabled 
  } = props;

  return (
    <div className="flex auth-input-cont">
      <span>{placeholder}</span>
        <input
          disabled={disabled}
          required
          type={type}
          value={value}
          placeholder={`Enter ${placeholder}`}
          className="auth-input"
          onChange={(e) => setValue(e.target.value)}
        />
        {error && <span className="error">
          {error}
        </span>}
    </div>
  );
};

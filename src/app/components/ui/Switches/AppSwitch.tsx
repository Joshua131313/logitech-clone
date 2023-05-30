import React, { useState, useEffect } from "react";
import "./AppSwitch.css";

interface Props {
  checked?: boolean;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string
}

const AppSwitch: React.FC<Props> = (props) => {
  const { checked, setChecked, text } = props;

  return (
    <div className="switch-container flex-col">
      {text && <span>{text}</span>}
      <div className="switchdiv">
        <label className="form-switch">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked?.(e.target.checked);
            }}
          />
          <i></i>
        </label>
      </div>
    </div>
  );
};
export default AppSwitch;

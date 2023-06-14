import React, { CSSProperties } from "react";
import { Checkbox, Typography } from "antd";

type CheckboxFieldProps = {
  label: string;
  styleLabel?: CSSProperties
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, styleLabel }) => {
    
  return (
    <div>
      <Checkbox />
      <Typography.Text style={styleLabel}>{label}</Typography.Text>
    </div>
  );
};

export default CheckboxField;

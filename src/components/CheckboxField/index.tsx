import React, { CSSProperties } from "react";
import { Checkbox, Typography } from "antd";

type CheckboxFieldProps = {
  label: string;
  styleLabel?: CSSProperties,
  defaulChecked?: boolean;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, styleLabel, defaulChecked }) => {

  return (
    <div>
      <Checkbox defaultChecked={defaulChecked} />
      <Typography.Text style={styleLabel}>{label}</Typography.Text>
    </div>
  );
};

export default CheckboxField;
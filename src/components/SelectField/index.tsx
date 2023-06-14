import React from "react";
import { Row, Typography, Select } from "antd";
import { selectFieldProps } from "../../types/components/selectField";

const SelectField: React.FC<selectFieldProps> = ({
  title,
  styleTitle,
  styleSelect,
  width,
  ...selectProps
}) => {
  return (
    <div style={{ width: width }}>
      <Row>
        <Typography.Text style={styleTitle}>{title}</Typography.Text>
      </Row>
      <Row>
        <Select style={styleSelect} {...selectProps} />
      </Row>
    </div>
  );
};

export default SelectField;

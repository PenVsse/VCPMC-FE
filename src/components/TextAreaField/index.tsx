import React from "react";
import { Col, Input, Typography } from "antd";

import { IInputFieldProps } from "../../types/components/inputField";

const TextAreaField: React.FC<IInputFieldProps> = ({
  title,
  titleSize,
  value,
  invalidMessage,
  span,
  placeholder,
  size,
  type,
  disabled,
  fontWeightTitle,
  style,
  ...props
}) => {
  return (
    <Col span={span} style={{ margin: "0.5rem 0" }}>
      <Typography.Paragraph
        style={{
          fontSize: titleSize,
          marginBottom: "0.25rem",
          fontWeight: fontWeightTitle,
          color: '#fff'
        }}
      >
        {title}
      </Typography.Paragraph>
      <Input.TextArea
        value={value}
        placeholder={placeholder}
        {...props}
        spellCheck={false}
        size={size}
        style={{
          border: invalidMessage && `1px solid red`,
          borderRadius: "8px",
          fontFamily: "Nunito",
          ...style
        }}
        disabled={disabled}
        rows={5}
      />
      {invalidMessage && (
        <Typography.Text style={{ fontSize: "0.8rem", color: "red" }}>
          {invalidMessage}
        </Typography.Text>
      )}
    </Col>
  );
};

export default TextAreaField;
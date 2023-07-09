import React from "react";
import { Col, ConfigProvider, Input, Typography } from "antd";

import { IInputFieldProps } from "../../types/components/inputField";

const InputField: React.FC<IInputFieldProps> = ({
  title,
  titleSize,
  value,
  invalidMessage,
  span,
  placeholder,
  size,
  type,
  disabled,
  opacityTitle,
  fontWeightTitle,
  readonly,
  style,
  primary,
  ...props
}) => {
  return (
    <Col span={span} style={{ margin: "0.5rem 0" }}>
      <Typography.Paragraph
        style={{
          fontSize: titleSize,
          marginBottom: "0.25rem",
          fontWeight: fontWeightTitle,
          color: "#fff",
          opacity: opacityTitle,
        }}
      >
        {title}
      </Typography.Paragraph>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: primary || "#347AFF",
          },
        }}
      >
        <Input
          value={value}
          placeholder={placeholder}
          {...props}
          spellCheck={false}
          size={size}
          style={{
            border: invalidMessage && `1px solid red`,
            borderRadius: "8px",
            fontFamily: "Nunito",
            backgroundColor: "#2B2B3F",
            color: "#fff",
            ...style
          }}
          type={type}
          disabled={disabled}
          readOnly={readonly}
        />
      </ConfigProvider>
      {invalidMessage && (
        <Typography.Text style={{ fontSize: "0.8rem", color: "red" }}>
          {invalidMessage}
        </Typography.Text>
      )}
    </Col>
  );
};

export default InputField;

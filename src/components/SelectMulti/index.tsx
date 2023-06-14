import { Col, Typography, Select } from "antd";
import { ISelectMultiProps } from "../../types/components/selectMulti";

const SelectMulti: React.FC<ISelectMultiProps> = ({
  span,
  titleSize,
  fontWeightTitle,
  title,
  ...selectProps
}) => {
  return (
    <Col span={span}>
      <Typography.Paragraph
        style={{
          fontSize: titleSize,
          marginBottom: "0.25rem",
          fontWeight: fontWeightTitle,
        }}
      >
        {title}
      </Typography.Paragraph>
      <Select mode="multiple" {...selectProps} />
    </Col>
  );
};

export default SelectMulti;

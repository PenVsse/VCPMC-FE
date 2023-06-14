import React from "react";
import { Row, Typography, DatePicker } from "antd";
import { ISelectDateProps } from "../../types/components/selectDate";

const { RangePicker } = DatePicker;

const dateFormat = "DD/MM/YYYY";

const SelectDate: React.FC<ISelectDateProps> = ({
  styleTitle,
  styleDate,
  title,
  ...selectProps
}) => {
  return (
    <div>
      <Row>
        <Typography.Text style={styleTitle}>{title}</Typography.Text>
      </Row>
      <Row>
        <RangePicker style={styleDate} format={dateFormat} {...selectProps} size="large" />
      </Row>
    </div>
  );
};

export default SelectDate;

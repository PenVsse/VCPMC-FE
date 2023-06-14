import React, { CSSProperties } from "react";
import { DatePickerProps } from 'antd';
import { RangePickerRef } from 'antd/lib/date-picker/generatePicker/interface';

export interface ISelectDateProps extends Omit<RangePickerRef<DatePickerProps>, 'title'> {
    styleTitle: CSSProperties;
    styleDate: CSSProperties;
    title: string | React.ReactNode;
}
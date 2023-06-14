import { CSSProperties, ReactNode } from "react";
import { SelectProps } from 'antd';

export interface selectFieldProps extends Omit<SelectProps<any>, 'title'> {
    title: string | ReactNode;
    styleTitle: CSSProperties;
    styleSelect: CSSProperties;
    width: number | string;
}
import { SelectProps } from 'antd';
import { ReactNode } from 'react';

export interface ISelectMultiProps extends Omit<SelectProps<any>, 'title'> {
    span?: number;
    titleSize: number | string;
    fontWeightTitle: number | string;
    title: string | ReactNode;

}
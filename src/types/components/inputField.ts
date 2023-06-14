import { SizeType } from "antd/es/config-provider/SizeContext";
import { CSSProperties, ReactNode } from "react";

export interface IInputFieldProps {
    title?: string | ReactNode;
    titleSize?: string | number;
    value?: string | number | undefined | null;
    defaultValue?: string | number | undefined | null;
    invalidMessage?: string | ReactNode;
    fontWeightTitle?: number;
    span?: number;
    placeholder?: string;
    size?: SizeType;
    type?: string;
    disabled?: boolean;
    suffix?: React.ReactNode;
    opacityTitle?: number;
    readonly?: boolean;
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
}
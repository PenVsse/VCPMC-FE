import React from "react";

export interface IStatusProgress {
    colorStatus: string;
    name: string;
    quantity: number;
    colorValue: string;
}

export interface IProgressInfoProps {
    total: number;
    percent: number;
    icon: React.ReactNode;
    name: string;
    status: IStatusProgress[];
    color: string;
}

export interface IStaticItemProps {
    span: number;
    icon: React.ReactNode;
    name: string;
    value: number;
    percent: number;
    status: "increase" | "decrease";
}
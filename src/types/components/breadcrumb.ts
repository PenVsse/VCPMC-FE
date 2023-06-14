import { ReactNode } from "react";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import { IUser } from "../auth";

export interface BreadcrumbProps {
  separator?: ReactNode;
  items?: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
  user: IUser | null;
}

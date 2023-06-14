import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { ReactNode } from "react";

type NotificationType = "success" | "info" | "warning" | "error";

const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (
    type: NotificationType,
    placement: NotificationPlacement,
    message: string,
    icon: ReactNode
  ) => {
    api[type]({
      message,
      placement,
      icon,
      duration: .8,
      style: {
        backgroundColor: '#727288',
        padding: 0,
        borderRadius: 12,
        width: 300,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        paddingLeft: '1rem',
        color: '#fff'
      },
      closeIcon: null
    });
  };

  return {
    contextHolder,
    openNotification,
  };
};

export default useNotification;

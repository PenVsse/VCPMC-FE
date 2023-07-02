import React from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { Row, Typography, Col, DatePicker, Calendar, Space, Button } from "antd";
import InputField from "../../../components/InputField";
import styled from "styled-components";
import { IconMenu } from "../../Home";
import { MdPlaylistAdd } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MyDatePicker = styled(DatePicker)`
  :where(.css-dev-only-do-not-override-30vm8m).ant-picker {
    background-color: rgb(43, 43, 63) !important;
    border-color: orange;
  }
  :where(.css-dev-only-do-not-override-30vm8m).ant-picker.ant-picker-suffix {
    color: orange !important;
  }
  .anticon.anticon-calendar {
    color: orange !important;
  }
`;

const MyCalender = styled(Calendar)`
  .ant-picker-body {
    padding: 0 !important;
  }
  .ant-picker-calendar-header {
    background-color: rgb(47, 47, 65);
  }
  :where(
      .css-dev-only-do-not-override-30vm8m
    ).ant-picker-calendar.ant-picker-calendar-full
    .ant-picker-cell-in-view.ant-picker-cell-selected
    .ant-picker-calendar-date,
  :where(
      .css-dev-only-do-not-override-30vm8m
    ).ant-picker-calendar.ant-picker-calendar-full
    .ant-picker-cell-in-view.ant-picker-cell-selected
    .ant-picker-calendar-date-today {
    background: #3e3e5b;
  }
  .ant-radio-button-wrapper.ant-radio-button-wrapper-checked.css-dev-only-do-not-override-30vm8m {
    background-color: rgb(47, 47, 65) !important;
    color: #fff;
    opacity: 0.8;
  }
  .ant-radio-button-wrapper.css-dev-only-do-not-override-30vm8m {
    background-color: rgb(47, 47, 65) !important;
    color: #fff;
    opacity: 0.8;
    border-color: #ff9138;
  }
`;

interface ItemProps {
    name: string;
    time: string;
}

const Item: React.FC<ItemProps> = ({ name, time }) => {
    return (
        <div
            style={{
                padding: ".5rem",
                backgroundColor: "#33334D",
                borderRadius: 8,
                width: "100%",
                margin: ".25rem 0",
            }}
        >
            <Typography.Text
                style={{
                    ...textFont(".85rem"),
                    fontWeight: 700,
                    color: "orange",
                    margin: 0,
                }}
            >
                {name}
            </Typography.Text>
            <Row style={{ width: "100%", justifyContent: "space-between" }}>
                <Typography.Text
                    style={{
                        ...textFont(".8rem"),
                        fontWeight: 600,
                        color: "#fff",
                        margin: 0,
                    }}
                >
                    {`Thời lượng:`}
                </Typography.Text>
                <Typography.Text
                    style={{
                        ...textFont(".8rem"),
                        color: "#fff",
                        margin: 0,
                        opacity: 0.8,
                    }}
                >
                    {time}
                </Typography.Text>
            </Row>
        </div>
    );
};

const Update: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    return (
        <div
            style={{
                position: "relative",
                maxHeight: "100vh",
                minHeight: "100vh",
                overflowY: "scroll",
            }}
        >
            <MyBreadcrumb
                user={user}
                items={[
                    {
                        title: "Lập lịch phát",
                        href: "/schedule",
                    },
                    {
                        title: "Chi tiết",
                    },
                    {
                        title: "Chỉnh sửa lịch phát"
                    }
                ]}
                separator=">"
            />
            <Row style={{ padding: "0 7rem 0 2rem", width: "100%" }}>
                <Typography.Title
                    style={{
                        ...textFont("2rem"),
                        fontWeight: 700,
                        color: "#fff",
                        margin: 0,
                    }}
                >
                    Lập lịch phát
                </Typography.Title>
                <Row style={{ width: "100%", marginTop: "1rem" }}>
                    <Col span={5} style={{ paddingRight: ".75rem" }}>
                        <div
                            style={{
                                backgroundColor: "#2f2f41",
                                padding: "1rem",
                                borderRadius: 12,
                            }}
                        >
                            <Typography.Text
                                style={{
                                    ...textFont("1rem"),
                                    fontWeight: 700,
                                    color: "#fff",
                                    margin: 0,
                                }}
                            >
                                {`Thông tin lịch phát`}
                            </Typography.Text>
                            <Row style={{ width: "100%" }}>
                                <InputField
                                    span={24}
                                    title="Tên lịch phát"
                                    style={{ borderColor: "#cacaca", width: "100%" }}
                                    opacityTitle={0.7}
                                />
                                <Col span={24} style={{ marginBottom: ".5rem" }}>
                                    <Typography.Paragraph
                                        style={{
                                            ...textFont(".9rem"),
                                            margin: 0,
                                            opacity: 0.7,
                                        }}
                                    >
                                        Từ ngày
                                    </Typography.Paragraph>
                                    <MyDatePicker
                                        style={{ width: "100%" }}
                                        placeholder="dd/mm/yyyy"
                                    />
                                </Col>
                                <Col span={24}>
                                    <Typography.Paragraph
                                        style={{
                                            ...textFont(".9rem"),
                                            margin: 0,
                                            opacity: 0.7,
                                        }}
                                    >
                                        Đến ngày
                                    </Typography.Paragraph>
                                    <MyDatePicker
                                        style={{ width: "100%" }}
                                        placeholder="dd/mm/yyyy"
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div
                            style={{
                                backgroundColor: "#2f2f41",
                                padding: "1rem",
                                borderRadius: 12,
                                marginTop: "1rem",
                            }}
                        >
                            <Typography.Text
                                style={{
                                    ...textFont("1rem"),
                                    fontWeight: 700,
                                    color: "#fff",
                                    margin: 0,
                                }}
                            >
                                {`Danh sách Playlist`}
                            </Typography.Text>
                            <Row
                                style={{
                                    height: "30vh",
                                    overflowY: "scroll",
                                }}
                            >
                                <Item name="Top USUK" time="02:00:00" />
                                <Item name="Love songs" time="02:08:20" />
                                <Item name="Loving You" time="02:15:03" />
                                <Typography.Text
                                    style={{
                                        ...textFont("1rem"),
                                        fontWeight: 700,
                                        color: "#fff",
                                        margin: 0,
                                    }}
                                >
                                    {`Playlist mới`}
                                </Typography.Text>
                                <Item name="Summer Party" time="02:10:11" />
                                <Item name="Top USUK2021" time="02:00:00" />
                            </Row>
                        </div>
                    </Col>
                    <Col span={19} style={{ paddingLeft: ".75rem" }}>
                        <div
                            style={{
                                backgroundColor: "#2f2f41",
                                padding: "1rem",
                                borderRadius: 12,
                            }}
                        >
                            <MyCalender
                                mode="month"
                                style={{ height: "70vh", overflowY: "scroll" }}
                            />
                        </div>
                    </Col>
                </Row>
            </Row>
            <Row style={{ width: "100%" }}>
                <Col
                    span={24}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                    }}
                >
                    <Space size={20}>
                        <Button
                            className="root_color"
                            style={{
                                background: "content-box",
                                width: 120,
                                borderColor: "#FF9138",
                            }}
                            onClick={() => history.back()}
                        >
                            Hủy
                        </Button>
                        <Button type="primary" style={{ width: 120 }}>
                            Lưu
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Row
                style={{
                    position: "absolute",
                    right: 0,
                    top: "16%",
                    backgroundColor: "#2F2F41",
                    padding: "1rem .5rem",
                    borderRadius: "16px 0px 0px 16px",
                    flexDirection: "column",
                }}
            >
                <IconMenu
                    icon={
                        <BiCalendar
                            className="root_color"
                            style={{ width: 20, height: 20 }}
                        />
                    }
                    label="Áp lịch cho thiết bị"
                    onClick={() => navigate("add")}
                />
            </Row>
        </div>
    );
};

export default Update;
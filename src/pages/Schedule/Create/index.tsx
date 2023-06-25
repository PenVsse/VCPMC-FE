import React from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { Row, Typography, Col, DatePicker } from "antd";
import InputField from "../../../components/InputField";
import styled from "styled-components";

const MyDatePicker = styled(DatePicker)`
  :where(.css-dev-only-do-not-override-30vm8m).ant-picker {
    background-color: rgb(43, 43, 63) !important;
    border-color: orange;
  }

  :where(.css-dev-only-do-not-override-30vm8m).ant-picker.ant-picker-suffix {
    color: orange;
  }
`;

interface ItemProps {
    name: string;
    time: string;
}

const Item: React.FC<ItemProps> = ({ name, time }) => {
    return (
        <div style={{ padding: ".5rem", backgroundColor: '#33334D', borderRadius: 8, width: '100%', margin: '.5rem 0' }}>
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

const Create: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);

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
                        title: "Thêm lịch phát mới",
                    },
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
                            <Row>
                                <Item name="Top USUK" time="02:00:00" />
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
                        ></div>
                    </Col>
                </Row>
            </Row>
        </div>
    );
};

export default Create;
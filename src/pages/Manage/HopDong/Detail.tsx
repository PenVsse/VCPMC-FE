import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Badge, Col, Radio, Row, Typography, Modal, Space, Button } from "antd";
import { useAppSelector } from "../../../store/hook";
import { useNavigate, useParams } from "react-router-dom";
import { hopdongApi } from "../../../api/hopdongApi";
import { IHopDongUQ } from "./TableData";
import { OPTION_MANAGMENT_HSD } from "../../../constants/option";
import { BsFileEarmarkPdf, BsFileEarmarkWord } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { IconMenu } from "../../Home";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFileContract } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import TextArea from "antd/es/input/TextArea";

export interface MyInputProps {
    title: string;
    label?: string | React.ReactNode;
}

const MyInput: React.FC<MyInputProps> = ({ title, label }) => {
    return (
        <Row style={{ width: "100%", margin: ".25rem 0" }}>
            <Col span={10}>
                <Typography.Text style={{ color: "#fff", fontWeight: 600 }}>
                    {`${title}:`}
                </Typography.Text>
            </Col>
            <Col span={14}>
                <Typography.Text style={{ color: "#fff", opacity: 0.7 }}>
                    {label}
                </Typography.Text>
            </Col>
        </Row>
    );
};

const Detail: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const params = useParams();
    const navigate = useNavigate();
    const [hdUQ, setHDUQ] = useState<IHopDongUQ>();
    const [open, setOpen] = useState<boolean>(false);

    const hsd = OPTION_MANAGMENT_HSD.find((opt) => opt.value === hdUQ?.effect);

    useEffect(() => {
        if (params.id) {
            hopdongApi
                .getById(params.id)
                .then((res) => res.data)
                .then((data) => {
                    setHDUQ(data.data);
                });
        }
    }, [params.id]);

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
                        title: "Quản lý",
                    },
                    {
                        title: "Quản lý hợp đồng",
                        href: "/management-contract",
                    },
                    {
                        title: "Chi tiết",
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
                    {`Chi tiết hợp đồng ủy quyền bài hát - ${hdUQ?.id}`}
                </Typography.Title>
                <Row style={{ width: "100%", margin: "1rem 0" }}>
                    <Radio.Group>
                        <Radio.Button
                            style={{
                                background: "transparent",
                                color: "#fff",
                                opacity: 0.8,
                                backgroundColor: "orange",
                            }}
                        >
                            Hợp đồng ủy quyền
                        </Radio.Button>
                        <Radio.Button
                            style={{
                                background: "transparent",
                                color: "#fff",
                            }}
                        >
                            Hợp đồng khai thác
                        </Radio.Button>
                    </Radio.Group>
                </Row>
                <Row style={{ width: "100%", marginTop: ".5rem" }}>
                    <Col span={8}>
                        <MyInput title="Số hợp đồng" label={hdUQ?.id} />
                        <MyInput title="Tên hợp đồng" label={hdUQ?.name} />
                        <MyInput title="Ngày hiệu lực" label={"02/06/2021"} />
                        <MyInput title="Ngày hết hạn" label={"02/06/2021"} />
                        <MyInput
                            title="Tình trạng"
                            label={
                                <div>
                                    <Badge status="processing" color={hsd?.color} />
                                    <Typography.Text
                                        style={{ ...textFont(".9rem"), marginLeft: ".25rem" }}
                                    >
                                        {hsd?.label}
                                    </Typography.Text>
                                </div>
                            }
                        />
                        <Row
                            style={{ width: "100%", marginTop: "2rem", marginBottom: "1rem" }}
                        >
                            <Typography.Text
                                style={{
                                    ...textFont("1.15rem"),
                                    color: "orange",
                                    fontWeight: 600,
                                }}
                            >
                                Thông tin pháp nhân uỷ quyền
                            </Typography.Text>
                        </Row>
                        <MyInput title="Pháp nhân uỷ quyền" label="Cá nhân" />
                        <MyInput title="Tên người uỷ quyền" label="Nguyễn Văn A" />
                        <MyInput title="Ngày sinh" label="10/01/1984" />
                        <MyInput title="Giới tính" label="Nam" />
                        <MyInput title="Số điện thoại" label="(+84) 345 678 901" />
                    </Col>
                    <Col span={8}>
                        <MyInput
                            title="Đính kèm tệp"
                            label={
                                <div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            margin: ".5rem 0",
                                        }}
                                    >
                                        <BsFileEarmarkWord
                                            style={{ width: 20, height: 20, marginRight: ".5rem" }}
                                        />{" "}
                                        hetthuongcannho.doc
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            margin: ".5rem 0",
                                        }}
                                    >
                                        <BsFileEarmarkPdf
                                            style={{ width: 20, height: 20, marginRight: ".5rem" }}
                                        />{" "}
                                        hetthuongcannho.doc
                                    </div>
                                </div>
                            }
                        />
                        <Row style={{ width: "100%", marginTop: "8.2rem" }}>
                            <MyInput title="Số CMND/ CCCD" label="123456789012" />
                            <MyInput title="Ngày cấp" label="10/07/2011" />
                            <MyInput title="Nơi cấp" label="Tp.HCM, Việt Nam" />
                            <MyInput title="Mã số thuế" label="92387489" />
                            <MyInput
                                title="Nơi cư trú"
                                label="69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
                            />
                        </Row>
                    </Col>
                    <Col span={8} style={{ paddingLeft: "1rem" }}>
                        <Row style={{ width: "100%" }}>
                            <div
                                style={{
                                    color: "orange",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: 600,
                                }}
                            >
                                <RiErrorWarningLine
                                    style={{ width: 20, height: 20, marginRight: ".5rem" }}
                                />{" "}
                                Mức nhuận bút
                            </div>
                        </Row>
                        <Row style={{ width: "100%" }}>
                            <MyInput title="Quyền tác giả" label="0%" />
                            <MyInput
                                title="Quyền liên quan"
                                label={
                                    <div>
                                        <div>Quyền của người biểu diễn: 50%</div>
                                        <div>Quyền của nhà sản xuất: 50%</div>
                                    </div>
                                }
                            />
                        </Row>
                        <Row style={{ marginTop: "6.6rem", width: "100%" }}>
                            <MyInput title="Email" label="nguyenvana@gmail.com" />
                            <MyInput title="Tên đăng nhập" label="nguyenvana@gmail.com" />
                            <MyInput
                                title="Mật khẩu"
                                label="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                            />
                            <MyInput title="Số tài khoản" label="1231123312211223" />
                            <MyInput title="Ngân hàng" label="ACB - Ngân hàng Á Châu" />
                        </Row>
                    </Col>
                </Row>
            </Row>

            <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
                <Row
                    style={{
                        ...textFont("1.25rem"),
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: ".5rem",
                        justifyContent: "center",
                    }}
                >
                    Hủy hợp đồng ủy quyền
                </Row>
                <TextArea
                    style={{ backgroundColor: "#2B2B3F", color: "#fff" }}
                    rows={5}
                    placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
                />
                <Col
                    span={24}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2rem",
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
                            onClick={() => setOpen(false)}
                        >
                            Quay lại
                        </Button>
                        <Button
                            type="primary"
                            style={{ width: 120 }}
                            onClick={() => setOpen(false)}
                        >
                            Hủy hợp đồng
                        </Button>
                    </Space>
                </Col>
            </Modal>

            <Row
                style={{
                    position: "absolute",
                    right: 0,
                    top: "24%",
                    backgroundColor: "#2F2F41",
                    padding: "1rem .5rem",
                    borderRadius: "16px 0px 0px 16px",
                    flexDirection: "column",
                }}
            >
                <IconMenu
                    icon={
                        <AiOutlinePlus
                            className="root_color"
                            style={{ width: 20, height: 20 }}
                        />
                    }
                    label="Chỉnh sửa hợp đồng"
                    onClick={() => navigate("update")}
                />
                <IconMenu
                    icon={
                        <FaFileContract
                            className="root_color"
                            style={{ width: 20, height: 20 }}
                        />
                    }
                    label="Gia hạn hợp đồng"
                    onClick={() => navigate("update")}
                />
                <IconMenu
                    icon={
                        <IoMdClose
                            className="root_color"
                            style={{ width: 20, height: 20 }}
                        />
                    }
                    label="Hủy hợp đồng"
                    onClick={() => setOpen(true)}
                />
            </Row>
        </div>
    );
};

export default Detail;
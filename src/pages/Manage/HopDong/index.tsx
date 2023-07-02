import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import {
    Radio,
    Row,
    Typography,
    Select,
    Space,
    Col,
    Modal,
    Button,
} from "antd";
import { useAppSelector } from "../../../store/hook";
import { OPTION_MANAGMENT_HSD, OPTION_QSH } from "../../../constants/option";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import TableData, { IHopDongUQ } from "./TableData";
import { IconMenu } from "../../Home";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { hopdongApi } from "../../../api/hopdongApi";

const HopDong: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const [contractType, setContractType] = useState<number>(0);
    const [hopdongUQs, setHopdongUQs] = useState<IHopDongUQ[]>([]);
    const [loadingHDUQ, setLoadingHDUQ] = useState<boolean>(false);
    const [openModalCancel, setOpenModalCancel] = useState<boolean>(false);

    useEffect(() => {
        setLoadingHDUQ(true);
        hopdongApi
            .getAll()
            .then((res) => res.data)
            .then((data) => {
                setHopdongUQs(data.data);
                setLoadingHDUQ(false);
            });
    }, []);

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
                    Danh sách hợp đồng
                </Typography.Title>
                <Row style={{ width: "100%", margin: "1rem 0" }}>
                    <Radio.Group>
                        <Radio.Button
                            style={{
                                background: "transparent",
                                color: "#fff",
                                opacity: contractType === 0 ? 0.8 : 1,
                                backgroundColor: contractType === 0 ? "orange" : "unset",
                            }}
                            onClick={() => setContractType(0)}
                        >
                            Hợp đồng ủy quyền
                        </Radio.Button>
                        <Radio.Button
                            style={{
                                background: "transparent",
                                color: "#fff",
                                opacity: contractType === 1 ? 0.8 : 1,
                                backgroundColor: contractType === 1 ? "orange" : "unset",
                            }}
                            onClick={() => setContractType(1)}
                        >
                            Hợp đồng khai thác
                        </Radio.Button>
                    </Radio.Group>
                </Row>
                <Row style={{ width: "100%" }}>
                    {contractType === 0 && (
                        <Row style={{ width: "100%", justifyContent: "space-between" }}>
                            <Space size={32}>
                                <span>
                                    <Typography.Text
                                        style={{ ...textFont(".9rem"), fontWeight: 600 }}
                                    >
                                        Quyền sở hữu:
                                    </Typography.Text>
                                    <Select
                                        options={OPTION_QSH}
                                        defaultValue={OPTION_QSH[0].value}
                                        style={{
                                            width: 160,
                                            marginLeft: ".75rem",
                                        }}
                                        size="large"
                                    />
                                </span>
                                <span>
                                    <Typography.Text
                                        style={{ ...textFont(".9rem"), fontWeight: 600 }}
                                    >
                                        Hiệu lực hợp đồng:
                                    </Typography.Text>
                                    <Select
                                        options={OPTION_MANAGMENT_HSD}
                                        defaultValue={OPTION_MANAGMENT_HSD[0].value}
                                        style={{
                                            width: 160,
                                            marginLeft: ".75rem",
                                        }}
                                        size="large"
                                    />
                                </span>
                            </Space>
                            <Col>
                                <InputField
                                    style={{
                                        padding: ".5rem 1.5rem",
                                        width: 400,
                                        backgroundColor: "#2B2B3F",
                                    }}
                                    placeholder="Tên hợp đồng, số hợp đồng, người ủy quyền,..."
                                    suffix={<BiSearch style={{ width: 24, height: 24 }} />}
                                />
                            </Col>
                            <Row style={{ width: "100%", marginTop: ".5rem" }}>
                                <TableData
                                    data={hopdongUQs}
                                    loading={loadingHDUQ}
                                    setOpen={setOpenModalCancel}
                                />
                            </Row>
                        </Row>
                    )}
                </Row>
            </Row>

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
                    label="Thêm lịch phát"
                    onClick={() => navigate("create")}
                />
            </Row>

            <Modal
                open={openModalCancel}
                onCancel={() => setOpenModalCancel(false)}
                footer={null}
            >
                <Row
                    style={{
                        ...textFont("1.25rem"),
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: ".5rem",
                        justifyContent: "center",
                    }}
                >
                    Lý do hủy hợp đồng uỷ quyền HĐUQ 1234
                </Row>
                <Row
                    style={{
                        border: "1px solid #727288",
                        borderRadius: 8,
                        padding: "4rem 1rem",
                        color: '#fff',
                        opacity: '.8'
                    }}
                >
                    Hủy hợp đồng để tạo hợp đồng mới với giá trị và thời hạn lâu hơn.
                </Row>
                <Col
                    span={24}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2rem",
                    }}
                >
                    <Button
                        type="primary"
                        style={{ width: 120 }}
                        onClick={() => setOpenModalCancel(false)}
                    >
                        Đóng
                    </Button>
                </Col>
            </Modal>
        </div>
    );
};

export default HopDong;
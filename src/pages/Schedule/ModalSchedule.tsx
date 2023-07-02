import { Modal, Row, Col, Divider, Input, Space, Button } from "antd";
import { textFont } from "../../components/MyBreadcrumb";
import CheckboxField from "../../components/CheckboxField";

type ModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalSchedule: React.FC<ModalProps> = ({ open, setOpen }) => {
    return (
        <Modal footer={null} open={open} onCancel={() => setOpen(false)}>
            <Row
                style={{
                    ...textFont("1.25rem"),
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: ".5rem",
                }}
            >
                Top USUK
            </Row>
            <Row
                style={{
                    ...textFont(".8rem"),
                    color: "#fff",
                    opacity: 0.8,
                }}
            >
                Lặp lại trong tuần
            </Row>
            <Row style={{ margin: ".5rem 0" }}>
                <Col span={6} style={{ marginBottom: ".5rem" }}>
                    <CheckboxField
                        defaulChecked={true}
                        label="Thứ hai"
                        styleLabel={{ marginLeft: ".5rem", color: "#fff" }}
                    />
                </Col>
                <Col span={6} style={{ marginBottom: ".5rem" }}>
                    <CheckboxField
                        label="Thứ ba"
                        styleLabel={{ marginLeft: ".5rem", color: "#fff" }}
                    />
                </Col>
                <Col span={6} style={{ marginBottom: ".5rem" }}>
                    <CheckboxField
                        label="Thứ tư"
                        styleLabel={{ marginLeft: ".5rem", color: "#fff" }}
                    />
                </Col>
                <Col span={6} style={{ marginBottom: ".5rem" }}>
                    <CheckboxField
                        label="Thứ năm"
                        styleLabel={{ marginLeft: ".5rem", color: "#fff" }}
                    />
                </Col>
                <Col span={6} style={{ marginBottom: ".5rem" }}>
                    <CheckboxField
                        label="Thứ sáu"
                        styleLabel={{ marginLeft: ".5rem", color: "#fff" }}
                    />
                </Col>
                <Col span={6} style={{ marginBottom: ".5rem" }}>
                    <CheckboxField
                        label="Thứ bảy"
                        styleLabel={{ marginLeft: ".5rem", color: "#fff" }}
                    />
                </Col>
                <Col span={6} style={{ marginBottom: ".5rem" }}>
                    <CheckboxField
                        label="Chủ nhật"
                        styleLabel={{ marginLeft: ".5rem", color: "#fff" }}
                    />
                </Col>
            </Row>
            <Divider style={{ backgroundColor: "#ccc" }} />
            <Row
                style={{
                    ...textFont(".8rem"),
                    color: "#fff",
                    fontWeight: 600,
                }}
            >
                Thứ hai
            </Row>
            <Input
                style={{ backgroundColor: "#2B2B3F", width: "40px" }}
                defaultValue={"06"}
            />
            <span style={{ margin: "0 .25rem", color: "#fff" }}>:</span>
            <Input
                style={{ backgroundColor: "#2B2B3F", width: "40px" }}
                defaultValue={"00"}
            />
            <span style={{ margin: "0 .25rem", color: "#fff" }}>:</span>
            <Input
                style={{ backgroundColor: "#2B2B3F", width: "40px" }}
                defaultValue={"00"}
            />
            <span style={{ margin: "0 .75rem", color: "#fff", fontWeight: 600 }}>
                -
            </span>
            <Input
                style={{ backgroundColor: "#2B2B3F", width: "40px" }}
                defaultValue={"08"}
            />
            <span style={{ margin: "0 .25rem", color: "#fff" }}>:</span>
            <Input
                style={{ backgroundColor: "#2B2B3F", width: "40px" }}
                defaultValue={"00"}
            />
            <span style={{ margin: "0 .25rem", color: "#fff" }}>:</span>
            <Input
                style={{ backgroundColor: "#2B2B3F", width: "40px" }}
                defaultValue={"00"}
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
                        Hủy
                    </Button>
                    <Button
                        type="primary"
                        style={{ width: 120 }}
                        onClick={() => setOpen(false)}
                    >
                        Lưu
                    </Button>
                </Space>
            </Col>
        </Modal>
    );
};

export default ModalSchedule;
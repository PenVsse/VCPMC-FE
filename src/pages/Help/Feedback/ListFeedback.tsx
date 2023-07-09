import { Col, Row, Typography } from "antd";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { MouseEventHandler, useEffect, useState } from "react";
import { feedbackApi } from "../../../api/feedbackApi";
import { OPTION_HELP } from ".";

const Feedback = ({
  name,
  date,
  topic,
  desc,
  isActive = false,
  onClick,
}: {
  name: string;
  date: string;
  topic: string;
  desc: string;
  isActive?: boolean;
  onClick: MouseEventHandler;
}) => {
  return (
    <Row
      onClick={onClick}
      style={{
        width: "100%",
        padding: "1rem",
        backgroundColor: isActive ? "#3E3E5B" : "unset",
        borderRadius: 8,
        cursor: "pointer",
      }}
    >
      <Col span={4}>
        <img
          style={{ borderRadius: "50%" }}
          width={36}
          height={36}
          src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/no_avatar.jpg?alt=media&token=f439c5a5-cd01-4208-9aca-1a7d39611dca"
        />
      </Col>
      <Col
        span={20}
        style={{
          fontSize: ".9rem",
        }}
      >
        <Row
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Row style={{ fontWeight: 600 }}>{name}</Row>
          <Row style={{ opacity: 0.7, fontSize: ".8rem" }}>{date}</Row>
        </Row>
        <Row
          style={{
            width: "100%",
            opacity: 0.7,
            fontSize: ".8rem",
            marginTop: ".25rem",
          }}
        >
          {`Chủ đề: ${topic}-${desc}`}
        </Row>
      </Col>
    </Row>
  );
};

interface IFeedback {
  id: number;
  user: string;
  topicId: number;
  desc: string;
  createdAt: string;
}

const ListFeedback = () => {
  const { user } = useAppSelector((state) => state.auth);

  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
  const [selectFeedback, setSelectFeedback] = useState<IFeedback>();

  useEffect(() => {
    feedbackApi
      .getAll()
      .then((res) => res.data)
      .then((data) => {
        setFeedbacks(data.data);
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
            title: "Hỗ trợ",
          },
          {
            title: "Feedback",
          },
        ]}
        separator=">"
      />
      <Row
        style={{
          padding: "0 7rem 0 2rem",
          width: "100%",
        }}
      >
        <Typography.Title
          style={{
            ...textFont("2rem"),
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          Feedback
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <Col
            span={8}
            style={{
              paddingRight: ".75rem",
            }}
          >
            <Row
              style={{
                width: "100%",
                backgroundColor: "#2B2B3F",
                padding: ".5rem",
                borderRadius: 8,
              }}
            >
              {feedbacks.map((fb) => (
                <Feedback
                  name={fb.user}
                  date={fb.createdAt.slice(0, 10).replaceAll("-", "/")}
                  desc={
                    fb.desc.length > 20 ? fb.desc.slice(0, 20) + "..." : fb.desc
                  }
                  topic={
                    OPTION_HELP.find((oh) => oh.value === fb.topicId)?.label ||
                    "Khác"
                  }
                  isActive={selectFeedback?.id === fb.id}
                  onClick={() => setSelectFeedback(fb)}
                />
              ))}
            </Row>
          </Col>
          <Col span={16} style={{ paddingLeft: ".75rem" }}>
            {selectFeedback && (
              <Row
                style={{
                  width: "100%",
                  backgroundColor: "#2B2B3F",
                  padding: "2rem",
                  borderRadius: 8,
                }}
              >
                <Row
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      ...textFont("1rem"),
                      fontWeight: 600,
                    }}
                  >
                    <img
                      style={{ borderRadius: "50%", marginRight: "1rem" }}
                      width={36}
                      height={36}
                      src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/no_avatar.jpg?alt=media&token=f439c5a5-cd01-4208-9aca-1a7d39611dca"
                    />
                    {selectFeedback?.user}
                  </span>
                  <span>
                    {selectFeedback?.createdAt
                      .slice(0, 10)
                      .replaceAll("-", "/")}
                  </span>
                </Row>
                <Row
                  style={{ width: "100%", margin: "1rem 0", fontWeight: 600 }}
                >
                  {`Chủ đề:  ${
                    OPTION_HELP.find(
                      (oh) => oh.value === selectFeedback?.topicId
                    )?.label
                  }`}
                </Row>
                <Row style={{ width: "100%", opacity: .7 }}>{selectFeedback?.desc}</Row>
              </Row>
            )}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default ListFeedback;

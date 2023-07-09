import { Row, Typography, Col } from "antd";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { MouseEventHandler, useState } from "react";

const Option = ({
  label,
  isActive = false,
  onClick,
}: {
  label: string;
  isActive?: boolean;
  onClick: MouseEventHandler;
}) => (
  <Row
    style={{
      padding: "1rem 0 1rem 1rem",
      fontWeight: 600,
      width: "100%",
      borderLeft: isActive ? "3px solid #FF7506" : "unset",
      color: isActive ? "#FF7506" : "#FFF",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    {label}
  </Row>
);

const options = [
  {
    id: 1,
    label: "1. Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    label: "2. Consectetur adipiscing elit sed do",
  },
  {
    id: 3,
    label: "3. Iusmod tempor incididunt ut labo",
  },
  {
    id: 4,
    label: "4. Ut enim ad minim veniam",
  },
  {
    id: 5,
    label: "5. Quis nostrud exercitation ullamco",
  },
  {
    id: 6,
    label: "6. Excepteur sint occaecat cupidatats",
  },
  {
    id: 7,
    label: "7. Sunt in culpa qui officiat",
  },
  {
    id: 8,
    label: "8. Sed ut perspiciatis unde omnis iste",
  },
];

const Helper = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [selected, setSelected] = useState<number>(options[0].id);
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
            title: "Hướng dẫn sử dụng",
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
          Hướng dẫn sử dụng
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <Col span={7} style={{ paddingRight: "1rem", width: "100%" }}>
            <Row
              style={{
                backgroundColor: "#39394D",
                padding: "1rem",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            >
              <Typography.Title
                style={{
                  ...textFont("1.5rem"),
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Danh mục hướng dẫn
              </Typography.Title>
            </Row>
            <Row
              style={{
                width: "100%",
                backgroundColor: "#2F2F41",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                paddingBottom: "5rem",
              }}
            >
              {options.map((o) => (
                <Option
                  label={o.label}
                  onClick={() => setSelected(o.id)}
                  isActive={selected === o.id}
                />
              ))}
            </Row>
          </Col>
          <Col span={17} style={{ paddingLeft: "1rem" }}>
            <Row
              style={{
                width: "100%",
                backgroundColor: "#2F2F41",
                padding: "1rem",
                borderRadius: 16,
                paddingBottom: "3rem",
              }}
            >
              <Typography.Title
                style={{
                  ...textFont("1.25rem"),
                  fontWeight: 700,
                  color: "#FF7506",
                  margin: 0,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {options
                  .find((o) => o.id === selected)
                  ?.label?.slice(2)
                  .trim()}
              </Typography.Title>
              <Typography.Paragraph style={{ color: "#fff", opacity: 0.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas.
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: "#fff", opacity: 0.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas:
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: "#fff", opacity: 0.8 }}>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Platea sit placerat odio lorem. Cum eleifend bibendum ipsum
                  quis scelerisque dui nibh odio id. Nam cras nec non posuere
                  etiam.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Platea sit placerat odio lorem. Cum eleifend bibendum ipsum
                  quis scelerisque dui nibh odio id. Nam cras nec non posuere
                  etiam.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Platea sit placerat odio lorem. Cum eleifend bibendum ipsum
                  quis scelerisque dui nibh odio id. Nam cras nec non posuere
                  etiam.
                </li>
              </Typography.Paragraph>

              <Typography.Paragraph style={{ color: "#fff", opacity: 0.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: "#fff", opacity: 0.8 }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur.
              </Typography.Paragraph>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Helper;

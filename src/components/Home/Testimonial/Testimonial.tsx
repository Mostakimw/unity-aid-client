import { Col, Row, Space } from "antd";
import Container from "../../Container/Container";
import SectionTitle from "../../reusable/SectionTitle/SectionTitle";

const Testimonial = () => {
  return (
    <Container style={{ marginTop: 50 }}>
      <SectionTitle>Testimonial</SectionTitle>
      <Row
        style={{ marginTop: 30, height: 550 }}
        gutter={35}
        className="shadow-xl rounded-md"
      >
        {/* title side */}
        <Col span={10}>
          <div className="bg-blue-500 py-24 px-8 rounded-br-[6rem]">
            <h1 className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nihil.
            </h1>
          </div>
        </Col>
        {/* review side */}
        <Col span={14}>
          <Space
            size={20}
            direction="vertical"
            align="center"
            className="h-full max-w-md justify-center"
          >
            <h2 className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, aperiam?
            </h2>
            <p className="text-gray-600 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              sapiente unde repellat alias similique illo, fugiat eaque a
              possimus incidunt pariatur quis quaerat, inventore explicabo
              voluptatum cupiditate rerum neque accusamus ullam. Perspiciatis
              ipsam nisi expedita tenetur fugiat! Laboriosam explicabo
              distinctio libero autem aliquam, similique officia.
            </p>
            <Space direction="vertical" align="center">
              <h5>John Dow</h5>
              <p>Web developer</p>
            </Space>
          </Space>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;

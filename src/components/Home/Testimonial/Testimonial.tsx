import { Col, Row } from "antd";
import Container from "../../Container/Container";
import SectionTitle from "../../reusable/SectionTitle/SectionTitle";

const Testimonial = () => {
  return (
    <Container style={{ marginTop: 50 }}>
      <SectionTitle>Testimonial</SectionTitle>
      <Row style={{marginTop: 20}}>
        <Col span={10}><div></div></Col>
        <Col span={14}>carousel and testimonials</Col>
      </Row>
    </Container>
  );
};

export default Testimonial;

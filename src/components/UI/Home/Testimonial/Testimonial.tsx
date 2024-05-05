import "./Testimonial.css";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { BulbOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Container from "../../../reusable/Container/Container";

interface TTestimonial {
  id: string;
  title: string;
  description: string;
  name: string;
  designation: string;
}

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TTestimonial[]>([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
      });
  }, []);
  return (
    <Container style={{ marginTop: 112 }}>
      {/* <SectionTitle>Testimonial</SectionTitle> */}
      <div className="shadow-xl rounded-md h-fit lg:h-[550px] ">
        <Row style={{ marginTop: 30 }} className="lg:h-[470px]">
          {/* title side */}
          <Col xs={{ span: 24 }} lg={{ span: 10 }}>
            <div className="bg-[#011D41] py-16 px-5 md:px-20 rounded-br-[6rem] h-full flex items-center justify-center">
              <div>
                <div className="flex justify-center mb-10">
                  <BulbOutlined className="text-[5rem] text-yellow-500 text-center" />
                </div>
                <h1
                  className="text-gray-200 text-center tracking-wide"
                  style={{ lineHeight: "3.5rem" }}
                >
                  See What Our Top Donor Says About Our Platform
                </h1>
              </div>
            </div>
          </Col>
          {/* review side */}
          <Col
            xs={{ span: 24 }}
            lg={{ span: 14 }}
            className="h-full flex justify-center items-center py-20 px-5"
          >
            {/* carousel */}
            {testimonial.length > 0 && (
              <Carousel
                autoPlay
                autoFocus
                interval={4000}
                infiniteLoop
                showThumbs={false}
                className="w-full"
              >
                {testimonial.map((item) => (
                  <div
                    key={item.id}
                    className="max-w-md mx-auto space-y-5 text-center"
                  >
                    <h2 className="text-center">{item.title}</h2>
                    <p className="text-gray-600 text-justify">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      <h5>{item.name}</h5>
                      <p className="text-gray-900">{item.designation}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Testimonial;

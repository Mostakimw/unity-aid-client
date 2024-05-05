import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { Col, Row } from "antd";
import Container from "../../Container/Container";
import SectionTitle from "../../reusable/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { BulbOutlined } from "@ant-design/icons";

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
    <Container style={{ marginTop: 80 }}>
      <SectionTitle>Testimonial</SectionTitle>
      <div className="shadow-xl rounded-md h-[550px]">
        <Row style={{ marginTop: 30, height: 470 }}>
          {/* title side */}
          <Col span={10}>
            <div className="bg-[#011D41] py-24 px-20 rounded-br-[6rem] h-full flex items-center justify-center">
              <div>
                <BulbOutlined className="text-[5rem] text-yellow-500 text-center" />
                <h1 className="text-gray-200">See What Our Top Donor Says</h1>
              </div>
            </div>
          </Col>
          {/* review side */}
          <Col span={14} className="h-full flex justify-center items-center ">
            {/* carousel */}
            {testimonial.length > 0 && (
              <Carousel
                autoPlay
                autoFocus
                interval={400}
                showThumbs={false}
                className="max-w-md"
              >
                {testimonial.map((item) => (
                  <div key={item.id} className="max-w-md space-y-5 text-center">
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

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Container from "../../Container/Container";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <Container style={{ marginTop: 112 }}>
      <div className="gallery">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop>
          <div>
            <GalleryCard />
          </div>
          <div>
            <GalleryCard />
          </div>
          <div>
            <GalleryCard />
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default Gallery;

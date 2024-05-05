import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Container from "../../Container/Container";
import "./Gallery.css";
import { GalleryCard, MobileGalleryCard } from "./GalleryCard";
import { useMediaQuery } from "react-responsive";
import SectionTitle from "../../reusable/SectionTitle/SectionTitle";

const imageUrls = [
  [
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  ],
  [
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  ],
];

const mobileImageUrls = [
  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",

  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
];

const Gallery = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Container style={{ marginTop: 112 }}>
      <SectionTitle>Our Memories</SectionTitle>
      <div className="gallery mt-16">
        {/* carousel for medium and large devices */}
        {!isMobile ? (
          <Carousel showThumbs={false} showStatus={false} infiniteLoop>
            {imageUrls.map((images, index) => (
              <GalleryCard key={index} images={images} />
            ))}
          </Carousel>
        ) : (
          <>
            {/* carousel for mobile devices */}
            <Carousel showThumbs={false} showStatus={false} infiniteLoop>
              {mobileImageUrls.map((image, index) => (
                <MobileGalleryCard key={index} image={image} />
              ))}
            </Carousel>
          </>
        )}
      </div>
    </Container>
  );
};

export default Gallery;

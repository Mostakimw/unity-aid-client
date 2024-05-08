import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Gallery.css";
import { GalleryCard, MobileGalleryCard } from "./GalleryCard";
import { useMediaQuery } from "react-responsive";
import Container from "../../../reusable/Container/Container";
import SectionTitle from "../../../reusable/SectionTitle/SectionTitle";

const imageUrls = [
  [
    "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
    "https://www.patriotsoftware.com/wp-content/uploads/2018/07/charitable-donations.jpg",
    "https://static.twentyoverten.com/5a942106a9d42e3adb339cce/GNbP0LYhYR/MYRA-Featured-Images.png",
    "https://www.bpmcdn.com/f/files/vernon/import/2022-06/29310349_web1_220601-BPD-VancouverArt-FreeYouth_1.jpg;w=960",
  ],
  [
    "https://www.caterermiddleeast.com/2021/05/B0OKIhuj-Rite-Bite-Bangadesh.jpg",
    "https://www.ewubd.edu/storage/app/uploads/public/642/150/ba1/642150ba19ec9618125528.jpg",
    "https://theselfless.org/wp-content/uploads/2019/05/Niswarth-the-selfless-Gallery-Twenty-one.jpg",
    "https://i0.wp.com/www.bakg.org/wp-content/uploads/2023/03/Happy-Hat-Ladies.png?resize=1012%2C513&ssl=1",
  ],
];

const mobileImageUrls = [
  "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg",
  "https://www.patriotsoftware.com/wp-content/uploads/2018/07/charitable-donations.jpg",
  "https://static.twentyoverten.com/5a942106a9d42e3adb339cce/GNbP0LYhYR/MYRA-Featured-Images.png",
  "https://www.bpmcdn.com/f/files/vernon/import/2022-06/29310349_web1_220601-BPD-VancouverArt-FreeYouth_1.jpg;w=960",
  "https://www.caterermiddleeast.com/2021/05/B0OKIhuj-Rite-Bite-Bangadesh.jpg",
  "https://www.ewubd.edu/storage/app/uploads/public/642/150/ba1/642150ba19ec9618125528.jpg",
  "https://theselfless.org/wp-content/uploads/2019/05/Niswarth-the-selfless-Gallery-Twenty-one.jpg",
  "https://i0.wp.com/www.bakg.org/wp-content/uploads/2023/03/Happy-Hat-Ladies.png?resize=1012%2C513&ssl=1",
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

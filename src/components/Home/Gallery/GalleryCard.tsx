export const GalleryCard = ({ images }: { images: string[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
      <div>
        <img
          src={images[0]}
          className="w-full h-full object-cover"
          alt="Donation Gallery Image"
        />
      </div>
      <div className="flex flex-col justify-between">
        <img
          src={images[1]}
          className="w-full h-1/2 object-cover mb-3"
          alt="Donation Gallery Image"
        />
        <img
          src={images[2]}
          className="w-full h-1/2 object-cover"
          alt="Donation Gallery Image"
        />
      </div>
      <div>
        <img
          src={images[3]}
          className="w-full h-full object-cover"
          alt="Donation Gallery Image"
        />
      </div>
    </div>
  );
};

export const MobileGalleryCard = ({ image }: { image: string }) => {
  return (
    <div>
      <img
        src={image}
        className="w-full h-full object-cover"
        alt="Donation Gallery Image"
      />
    </div>
  );
};

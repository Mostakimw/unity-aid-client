const GalleryCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
          <div>
            <img
              src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between">
            <img
              src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg"
              className="w-full h-1/2 object-cover mb-3"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg"
              className="w-full h-1/2 object-cover"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
  );
};

export default GalleryCard;
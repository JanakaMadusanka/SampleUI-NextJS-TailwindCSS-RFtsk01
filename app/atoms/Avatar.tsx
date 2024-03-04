
import imgMountain from "../../public/assets/img-lake-view.jpg"

const Avatar = () => {
    return (
      <img
        src={imgMountain.src}
        alt="MyProfile"
        className="w-12 h-12 rounded-full object-cover"
      />
    );
  };
  
  export default Avatar;

  //{ imageUrl, altText }
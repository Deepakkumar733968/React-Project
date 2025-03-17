import "./style.css";
import StarzButton from "../Button/StarzButton.tsx";
import { FaApple } from "react-icons/fa";
import { FaChromecast } from "react-icons/fa";
export const SignUpBanner = () => {
  return (
    <section className="banner-main">
      <h2 className="banner-header-two">Sign Up + Stream Now</h2>
      <h4 className="banner-header-four">
        Special Offer: $3/Month For 3 Months
      </h4>
      <p className="banner-description">
        Watch everywhere. Unlimited HD streaming and downloads. Stream on up to
        4 devices at the same time.
      </p>
      <StarzButton value="CLAIM SPECIAL OFFER" />
      <div className="banner-image-main">
        <img
          className="banner-image-white android-img"
          src="https://res.cloudinary.com/dj5vt6lf5/image/upload/v1742051390/Starz-Web-Image/doqoc9akoz1om6uq8crt.png"
          alt="android-image"
        />
        <FaApple className="banner-image-white apple-img" />
        <FaChromecast className="banner-image-white cast-img" />
      </div>
      <div>
        <img
          src="https://starz.imgix.net/homepage/devices/full-devices-012725.png?&auto=compress,format"
          alt="banner-image"
        />
      </div>
    </section>
  );
};

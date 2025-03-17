import { ImageCard } from "../ImageCard/ImageCard.tsx";
import "./style.css";
export const ComingSoon = () => {
  return (
    <section className="coming-soon-main">
      <h2>Coming Soon</h2>
      <ImageCard
        link="https://www.starz.com/us/en/"
        firstHeader="The Best Christmas Pageant Ever"
        secondHeader="More Info"
        imageUrl="https://stz1.imgix.net/web/contentId/69942/type/KEY/dimension/1536x2048.jpg?auto=compress,format&w=222&fit=max"
        className=""
        headerStyle={{ gap: "40px", width: "200px", top: "40px" }}
        imageSize={{ width: "222px", height: "296px" }}
        imageClass=""
        // firstHeaderStyle={{
        //   fontSize: "20px",
        //   fontWeight: 700,
        //   letterSpacing: "1.25px",
        //   lineHeight: 1.4,
        // }}
        // secondHeaderStyle={{
        //   fontSize: "20px",
        //   fontWeight: 700,
        //   letterSpacing: "1.25px",
        //   lineHeight: 1.4,
        // }}
        firstHeaderClass="coming-image-header"
        secondHeaderClass="coming-image-header"
      />
    </section>
  );
};

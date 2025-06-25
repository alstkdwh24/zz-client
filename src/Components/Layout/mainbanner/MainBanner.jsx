import mainBanner from "assets/banner/main-banner.webp";
import MainSearch from "../mainsearch/MainSearch";

const MainBanner = () => (
  <div className="main_banner" style={{ position: "relative" }}>
    <img src={mainBanner} alt="메인 배너" style={{ width: "100%", height: "auto" }} />
    <MainSearch />
  </div>
);

export default MainBanner;

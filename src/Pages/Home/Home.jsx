import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_tite from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className="hero-banner-img" />
        <div className="title">
          <img src={hero_tite} alt="" className="hero-title-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enenmy
          </p>
          <div className="hero-btns">
            <button className="hero-btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="hero-btn black-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics For You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

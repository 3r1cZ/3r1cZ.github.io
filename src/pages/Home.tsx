import "../css/Home.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import AnimationFadeIn from "../components/AnimationFadeIn";

const Home = () => {
  return (
    <AnimationFadeIn>
      <div className="container home-page double-grid">
        <div className="flex-item intro-text">
          <h1>
            Hello, <br /> I'm Eric Zhou!
          </h1>
          <h2>
            Web Development / Android Development / Artificial Intelligence /
            Game Development
          </h2>
          <Link aria-current="page" to="/portfolio">
            <Button>Portfolio</Button>
          </Link>
        </div>
        <div className="flex-item">
          <img className="profile-image" src={"/assets/Profile.JPG"} />
        </div>
      </div>
    </AnimationFadeIn>
  );
};

export default Home;

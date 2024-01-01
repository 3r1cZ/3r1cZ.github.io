import "../css/Home.css";
import profile from "../assets/Profile.JPG";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="flex-item intro-text">
        <h1>
          Hello, <br /> I'm Eric Zhou!
        </h1>
        <h2>
          Web Development / Android Development / Artificial Intelligence / Game
          Development
        </h2>
        <Link aria-current="page" to="/portfolio">
          <Button>Portfolio</Button>
        </Link>
      </div>
      <div className="flex-item">
        <img className="profile-image" src={profile} />
      </div>
    </div>
  );
};

export default Home;

import "../css/Home.css";
// import profile from "../assets/Profile.JPG";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="container home-page double-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
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
        <img className="profile-image" src={"/assets/Profile.JPG"} />
      </div>
    </motion.div>
  );
};

export default Home;

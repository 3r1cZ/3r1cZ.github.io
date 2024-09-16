import "../css/Home.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import AnimationFadeIn from "../components/AnimationFadeIn";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <AnimationFadeIn>
      <div className="container home-page double-grid">
        <div className="flex-item intro-text">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="multicoloured-header"
          >
            Hello, <br /> I'm Eric Zhou!
          </motion.h1>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="multicoloured-intro">
              Web Development / Android Development / Artificial Intelligence /
              Game Development
            </h2>
            <Link aria-current="page" to="/portfolio">
              <Button>Portfolio</Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-item"
        >
          <img className="profile-image" src={"/assets/Profile.JPG"} />
        </motion.div>
      </div>
    </AnimationFadeIn>
  );
};

export default Home;

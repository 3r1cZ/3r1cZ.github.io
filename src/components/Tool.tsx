import { motion } from "framer-motion";
import "../css/Tool.css";
import { useState } from "react";

interface ToolProps {
  tool: string;
}

/**
 * This function returns a tool component for the website.
 * @param tool the developer tool name
 * @returns the tool component
 */
const Tool = ({ tool }: ToolProps) => {
  const [jump, setAnimate] = useState(false);
  return (
    <motion.div
      className="tool"
      onMouseOver={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
      animate={{ y: jump ? -10 : void 0 }}
    >
      <img
        className="toolImage"
        src={"/assets/" + tool.toLowerCase().replace(" ", "_") + ".png"}
      />
      <p>{tool}</p>
    </motion.div>
  );
};

export default Tool;

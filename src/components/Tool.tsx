import { motion } from "framer-motion";
import "../css/Tool.css";

interface ToolProps {
  tool: string;
}

/**
 * This function returns a tool component for the website.
 * @param tool the developer tools
 * @returns the tool component
 */
const Tool = ({ tool }: ToolProps) => {
  return (
    <motion.div className="tool" whileHover={{ y: -10 }}>
      <img
        className="toolImage"
        src={"/assets/" + tool.toLowerCase().replace(" ", "_") + ".png"}
      />
      <p>{tool}</p>
    </motion.div>
  );
};

export default Tool;

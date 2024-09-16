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
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="tool">
        <img
          className="toolImage"
          src={"/assets/" + tool.toLowerCase().replace(" ", "_") + ".png"}
        />
        <p>{tool}</p>
      </div>
    </motion.div>
  );
};

export default Tool;

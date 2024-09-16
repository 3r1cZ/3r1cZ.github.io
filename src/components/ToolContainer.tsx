import { useRef, useState } from "react";
import "../css/ToolContainer.css";
import Tool from "./Tool";
import { motion } from "framer-motion";

interface ToolContainerProps {
  tags: string[];
  tools: any[];
}

/**
 * This function returns a tool container component for the website.
 * @param tools the list of developer tool names
 * @returns the tool container component
 */
const ToolContainer = ({ tags, tools }: ToolContainerProps) => {
  const [currentActive, setCurrentActive] = useState(0);
  const [currentFilter, setCurrentFilter] = useState("All");
  const tagContainer = useRef(null);

  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="tags-container"
        ref={tagContainer}
      >
        {tags.map((tag, index) => (
          <button
            key={index}
            className="tag-button"
            data-active={tag === "All"}
            onClick={() => {
              if (tagContainer.current !== null) {
                (tagContainer.current as HTMLDivElement).children[
                  currentActive
                ].setAttribute("data-active", "false");
                (tagContainer.current as HTMLDivElement).children[
                  index
                ].setAttribute("data-active", "true");
                setCurrentActive(index);
                setCurrentFilter(
                  (tagContainer.current as HTMLDivElement).children[index]
                    .innerHTML
                );
              }
            }}
          >
            {tag}
          </button>
        ))}
      </motion.div>
      <br />
      <div className="tool-container">
        {tools
          .filter((tool) => {
            return currentFilter === "All" || tool.tags.includes(currentFilter);
          })
          .map((tool, index) => (
            <Tool tool={tool.name} key={index}></Tool>
          ))}
      </div>
    </div>
  );
};

export default ToolContainer;

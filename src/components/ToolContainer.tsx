import { useRef, useState } from "react";
import "../css/ToolContainer.css";
import Tool from "./Tool";

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
      <div className="tags-container" ref={tagContainer}>
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
      </div>
      <br />
      <div className="tool-container">
        {tools
          .filter((tool) => {
            return currentFilter === "All" || tool.tags.includes(currentFilter);
          })
          .map((tool, index) => (
            <Tool tool={tool.name} key={index} index={index}></Tool>
          ))}
      </div>
    </div>
  );
};

export default ToolContainer;

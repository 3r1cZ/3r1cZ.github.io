import "../css/ToolContainer.css";
import Tool from "./Tool";

interface ToolContainerProps {
  tags: string[];
  tools: any[];
}

const ToolContainer = ({ tags, tools }: ToolContainerProps) => {
  console.log(tools);
  console.log(typeof tools);
  return (
    <div>
      <div className="tags-container">
        {tags.map((tag) => (
          <button
            className="tag-button"
            data-active={tag === "All"}
            onClick={() => {}}
          >
            {tag}
          </button>
        ))}
      </div>
      <br />
      <div className="tool-container">
        {tools.map((tool) => (
          <Tool tool={tool.name}></Tool>
        ))}
      </div>
    </div>
  );
};

export default ToolContainer;

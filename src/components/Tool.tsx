import "../css/Tool.css";

interface ToolProps {
  tool: string;
  index: number;
}

/**
 * This function returns a tool component for the website.
 * @param tool the developer tool name
 * @returns the tool component
 */
const Tool = ({ tool, index }: ToolProps) => {
  return (
    <div className="tool">
      <img
        loading="lazy"
        className="toolImage"
        src={"/assets/" + tool.toLowerCase().replace(" ", "_") + ".png"}
      />
      <p className="caption">{tool}</p>
    </div>
  );
};

export default Tool;

import "../css/Tool.css";

interface ToolProps {
  tool: string;
}

const Tool = ({ tool }: ToolProps) => {
  return (
    <div className="tool">
      <img
        className="toolImage"
        src={"/assets/" + tool.toLowerCase().replace(" ", "_") + ".png"}
      />
      <p className="caption">{tool}</p>
    </div>
  );
};

export default Tool;

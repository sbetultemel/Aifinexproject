import { Handle, Position } from "reactflow";

type TextNodeProps = {
  data: { value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void };
};

export default function TextNode({ data }: TextNodeProps) {
  return (
    <div style={{ padding: 10, border: "1px solid black", borderRadius: 5, background: "white" }}>
      <input type="text" value={data.value} onChange={data.onChange} placeholder="Enter text..." />
      {/* Giriş ve çıkış noktaları */}
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
}

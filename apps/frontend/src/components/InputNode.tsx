import { Handle, Position } from "reactflow";
import { useState } from "react";

interface InputNodeProps {
  data: { onSubmit: (input: string) => void };
}

const InputNode: React.FC<InputNodeProps> = ({ data }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() !== "") {
      data.onSubmit(input); // Backend'e gönderme işlemi
    }
  };

  return (
    <div style={{ padding: 10, border: "1px solid black", borderRadius: 5, background: "white" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Sorunuzu yazın..."
      />
      <button onClick={handleSubmit}>Gönder</button>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default InputNode;

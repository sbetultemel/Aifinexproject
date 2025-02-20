import React, { useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import TextNode from "./components/TextNode";
import InputNode from "./components/InputNode"; // Yeni input bileşeni

const nodeTypes = { textNode: TextNode, inputNode: InputNode };

function App() {
  const [inputText, setInputText] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [output, setOutput] = useState("AI Yanıtı Buraya Gelecek");

  const handleSendToBackend = async (userInput: string) => {
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: userInput }),
      });

      const data = await res.json();
      setOutput(data.message);
    } catch (error) {
      console.error("Hata:", error);
      setOutput("Bir hata oluştu!");
    }
  };

  const nodes: Node[] = [
    {
      id: "1",
      type: "inputNode", // Yeni input düğümü
      position: { x: 250, y: 5 },
      data: { onSubmit: handleSendToBackend }, // API'ye bağlanıyor
    },
    {
      id: "2",
      type: "textNode",
      position: { x: 100, y: 100 },
      data: { value: apiKey, onChange: (e: any) => setApiKey(e.target.value) }
    },
    {
      id: "3",
      type: "default",
      position: { x: 400, y: 200 },
      data: { label: output }
    }
  ];

  const edges: Edge[] = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default App;

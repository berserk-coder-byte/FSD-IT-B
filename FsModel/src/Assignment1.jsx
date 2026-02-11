import { useState } from "react";
import "./assignment1.css";

function Assignment1() {
  const [text, setText] = useState("");
  const [fileContent, setFileContent] = useState("");

  const readFile = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.text();
    setFileContent(data);
  };

  const writeFile = async () => {
    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: text,
    });
    alert("File written successfully");
  };

  return (
    <div className="container">
      <nav className="navbar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s"
          alt="ABES"
        />
      </nav>

      <h2>FS Model for Node</h2>

      <textarea
        onChange={(e) => setText(e.target.value)}
        placeholder="Write text to save in file"
      />

      <div className="btn-group">
        <button onClick={readFile}>Read File</button>
        <button onClick={writeFile}>Write File</button>
      </div>

      <div className="output">
        <h3>File Content:</h3>
        <p>{fileContent}</p>
      </div>
    </div>
  );
}

export default Assignment1;

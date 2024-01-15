import { useState } from "react";
import "./App.css";
import TextProcessedButton from "./Components/TextProcessedButton/TextProcessedButton";
import { saveAs } from "file-saver";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [myText, setMyText] = useState("");
  const [myTextprocessed, setMyTextprocessed] = useState("");

  const createFile = () => {
    const blob = new Blob([myTextprocessed], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "textoProcesado.txt");
  };

  const readFile = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = () => {
      console.log(fileReader.result);
      setMyText(fileReader.result);
    };

    fileReader.onerror = () => {
      console.log(fileReader.error);
    };
  };
  const handleOperationComplete = (result) => {
    setMyTextprocessed(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Leer y procesar archivo de texto</h1>
        <input
          className="inputFile"
          type="file"
          multiple={false}
          onChange={readFile}
        />

        {/* <button className="buttonFile">Procesar el archivo</button> */}
        <TextProcessedButton
          file={selectedFile}
          onOperationComplete={handleOperationComplete}
        />
        <br />
        <button onClick={createFile}>generar archivo</button>

        <br />
        <div className="container">
          <textarea
            cols="80"
            rows="25"
            placeholder="Texto a procesar"
            value={myText}
            onChange={(e) => setMyText(e.target.value)}
            disabled={true}
          ></textarea>
          <textarea
            cols="80"
            rows="25"
            placeholder="Texto  procesado"
            value={myTextprocessed}
            onChange={(e) => setMyTextprocessed(e.target.value)}
            disabled={true}
          ></textarea>
        </div>
      </header>
    </div>
  );
}

export default App;

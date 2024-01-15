import React from "react";

const TextProcessedButton = ({ file, onOperationComplete }) => {
  const handleButtonClick = () => {
    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = (e) => {
        const originalContent = e.target.result;

        //const modifiedContent = originalContent.split("min").reverse().join("");
        // Divide el texto en líneas
        const lines = originalContent.split("\n");

        const modifiedContent = lines
          .map((line) => {
            const match = line.match(/^(.*?)\s+(\d+min)$/);
            if (match) {
              const [time, description] = match;
              return {
                tema: description.trim(),
                duracion: time.slice(-5),
              };
            }
            return null;
          })
          .filter(Boolean);

        console.log(JSON.stringify(modifiedContent, null, 2));

        onOperationComplete(
          JSON.stringify(modifiedContent, null, 2)
            .replace("[", "")
            .replace("]", "")
            .replace("{", "")
            .replace("}", "")
            .replace(",{", "")
            .replace("},", "")
        );
      };

      reader.onerror = (err) => {
        console.error("Error al leer el archivo:", err);
      };
    }
  };

  return (
    <button className="buttonFile" onClick={handleButtonClick}>
      Procesar Archivo
    </button>
  );
};

export default TextProcessedButton;

import { useState } from "react";

export default function FileUpload() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]); // Stocke le fichier sélectionné
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Sélectionne un fichier d'abord !");
      return;
    }

    setUploading(true);
    
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      
      if (response.ok) {
        setFileName(data.fileName); // 🔥 Stocke le nom du fichier uploadé
      } else {
        alert("Erreur d'upload : " + data.error);
      }
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
      alert("Erreur d'upload !");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <input type="file" onChange={handleFileChange} />
      <button 
        onClick={handleUpload} 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {fileName && (
        <p className="mt-4 text-green-600">✅ Fichier uploadé : {fileName}</p>
      )}
    </div>
  );
}
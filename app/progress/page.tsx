"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import ICAL from "ical.js";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import FileUpload from "@/components/fileupload";

import { Slider } from "@/components/ui/slider";

const ICSProgress = () => {
  const [progressData, setProgressData] = useState<{ name: string; progress: number }[]>([]);
  const [total, setTotal] = useState<number>(0);

  const fetchICS = async (calfile, thresh) => {
    const response = await fetch(calfile);
    const text = await response.text();

    const jcalData = ICAL.parse(text);
    const comp = new ICAL.Component(jcalData);
    const events = comp.getAllSubcomponents("vevent");

    const now = DateTime.utc();
    const regrouped: Record<string, DateTime[]> = {};

    let maxStrLen = 0;
    events.forEach((event) => {
      const vevent = new ICAL.Event(event);
      const name = vevent.summary;
      const start = DateTime.fromJSDate(vevent.endDate.toJSDate());

      maxStrLen = Math.max(maxStrLen, name.length);
      if (!regrouped[name]) regrouped[name] = [];
      regrouped[name].push(start);
    });

    // Filtrer les événements avec moins de 6 occurrences
    Object.keys(regrouped).forEach((key) => {
      if (regrouped[key].length <= thresh) delete regrouped[key];
    });

    let gPas = 0,
      gTot = 0;
    const progresses = Object.entries(regrouped).map(([name, dates]) => {
      const total = dates.length;
      const past = dates.filter((date) => date < now).length;
      gPas += past;
      gTot += total;
      return { name, progress: past / total };
    });

    // Trier les progressions et ajouter "Total"
    progresses.sort((a, b) => a.progress - b.progress);
    setTotal(gPas / gTot);

    setProgressData(progresses);
  };

  const [fileName, setFileName] = useState<string | null>("/ADECal(5).ics");
  const [threshhold, setThreshold] = useState(6);
  
  useEffect(() => {
    fetchICS(fileName, threshhold);
    console.log(fileName);
  }, [fileName, threshhold]);

  //
  // File upload handle
  //

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
        setFileName(data.filePath); // 🔥 Stocke le nom du fichier uploadé
        console.log(data, data.filePath)
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
    <div className="flex justify-center items-center my-8">
      <div className="w-[600px]">
        <h2 className="text-3xl text-center m-4">Progression des cours</h2>
          <div className="p-4 border rounded-lg shadow-md text-center">
            <h3 className="text-xl">Charger un fichier ICS</h3>
            <div className="flex items-center justify-center space-x-4">
              <input type="file" onChange={handleFileChange} />
              <button 
                onClick={handleUpload} 
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
          <h2 className="text-l m-2">Nombre de cours minimum pour être pris en compte</h2>
          <Slider defaultValue={[1]} min={1} max={10} onValueChange={(value) => setThreshold(value[0])}></Slider>
          <p>{threshhold}</p>
          <div className="my-8">
            {progressData.map(({ name, progress }) => (
              <div key={name}>
                <Separator className="my-2"></Separator>
                <strong>{name}</strong>
                <div className="flex items-center">
                  <Progress value={progress*100}/>
                  <span className="mx-2 text-l">{(progress*100).toFixed(0)}%</span>
                </div>
              </div>
            ))}
            <div className="border-[1px] border-white rounded-xl p-4 my-8 mx-0">
              <strong className="text-xl">Total</strong>
              <div className="flex items-center">
                <Progress value={total*100}/>
                <span className="mx-2 text-l">{(total*100).toFixed(0)}%</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ICSProgress;
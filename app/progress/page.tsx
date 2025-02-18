"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import ICAL from "ical.js";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const ICSProgress = () => {
  const [progressData, setProgressData] = useState<{ name: string; progress: number }[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchICS = async () => {
      const response = await fetch("/ADECal(5).ics");
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
        if (regrouped[key].length < 6) delete regrouped[key];
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

    fetchICS();
  }, []);

  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-[600px]">
        <h2 className="text-3xl text-center">Progression des cours</h2>
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
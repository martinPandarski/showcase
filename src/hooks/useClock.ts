import { useEffect, useState } from "react";

export const useClock = (timeZone = "Europe/Sofia") => {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () => {
      const d = new Date(new Date().toLocaleString("en-US", { timeZone }));
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return time;
};

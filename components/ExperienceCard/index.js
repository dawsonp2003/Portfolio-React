import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ExperienceCard = ({ dates, type, position, bullets }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105`}
    >
      <h2 className="text-2xl font-semibold">{position}</h2>
      <p className="mt-2 text-lg opacity-70">{dates} • {type}</p>
      <ul className="mt-4 list-disc list-inside space-y-2 opacity-90">
        {bullets && bullets.map((bullet, idx) => (
          <li key={idx} className="list-item">{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;

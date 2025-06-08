import React from "react";

export interface MoonPhaseDisplayProps {
  phase?: number;
}

const MoonPhaseDisplay: React.FC<MoonPhaseDisplayProps> = ({ phase }) => {
  if (typeof phase === "undefined") {
    return <div className="w-full h-full bg-gray-800 rounded-full" />;
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={`/images/moons/Moon_${phase}.jpg`}
        alt={`Moon phase ${phase}`}
        className="w-full h-full rounded-full"
      />
    </div>
  );
};

export default MoonPhaseDisplay;

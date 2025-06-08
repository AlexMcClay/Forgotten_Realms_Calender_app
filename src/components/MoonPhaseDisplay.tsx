import React from "react";

export interface MoonPhaseDisplayProps {
  phase?: number;
  useHighRes?: boolean;
}

const MoonPhaseDisplay: React.FC<MoonPhaseDisplayProps> = ({
  phase,
  useHighRes = false,
}) => {
  if (typeof phase === "undefined") {
    return <div className="w-full h-full bg-gray-800 rounded-full" />;
  }

  const getHighResPhase = (phase: number): number => {
    switch (phase) {
      case 1: // Full Moon
        return 1;
      case 2:
      case 3:
      case 4: // Waning Gibbous
        return 2;
      case 5: // Last Quarter
        return 3;
      case 6:
      case 7:
      case 8: // Waning Crescent
        return 4;
      case 9: // New Moon
        return 5;
      case 10:
      case 11:
      case 12: // Waxing Crescent
        return 6;
      case 13: // First Quarter
        return 7;
      case 14:
      case 15:
      case 16: // Waxing Gibbous
        return 8;
      default:
        return 1;
    }
  };

  const imagePath = useHighRes
    ? `/images/moons/Moon_x${getHighResPhase(phase)}.jpg`
    : `/images/moons/Moon_${phase}.jpg`;

  return (
    <div className="relative w-full h-full">
      <img
        src={imagePath}
        alt={`Moon phase ${phase}`}
        className="w-full h-full rounded-full"
      />
    </div>
  );
};

export default MoonPhaseDisplay;

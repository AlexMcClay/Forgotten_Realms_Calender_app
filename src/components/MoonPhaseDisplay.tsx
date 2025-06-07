import React from "react";
import Image from "next/image";
import { MoonPhase } from "../types/calendar";

interface MoonPhaseDisplayProps {
  moonPhase: MoonPhase;
  size?: "small" | "medium" | "large";
}

const MoonPhaseDisplay: React.FC<MoonPhaseDisplayProps> = ({
  moonPhase,
  size = "medium",
}) => {
  // Determine the size of the moon image
  const dimensions = {
    small: { width: 32, height: 32 },
    medium: { width: 64, height: 64 },
    large: { width: 128, height: 128 },
  };

  const { width, height } = dimensions[size];

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image
          src={moonPhase.imagePath}
          alt={moonPhase.name}
          width={width}
          height={height}
          className="rounded-full"
        />
      </div>
      <div className="text-center mt-2">
        <h3 className="font-semibold">{moonPhase.name}</h3>
        {size === "large" && (
          <p className="text-sm mt-1 max-w-md">{moonPhase.description}</p>
        )}
      </div>
    </div>
  );
};

export default MoonPhaseDisplay;

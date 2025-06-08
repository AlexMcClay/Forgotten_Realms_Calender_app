import React from "react";
import MoonPhaseDisplay from "./MoonPhaseDisplay";

interface MoonPhaseLegendProps {
  onInfoClick: () => void;
}

const MoonPhaseLegend: React.FC<MoonPhaseLegendProps> = ({ onInfoClick }) => {
  return (
    <div className="mt-4 p-4 bg-gray-900 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Moon Phase Legend</h3>
        <button
          onClick={onInfoClick}
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          More Info
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <MoonPhaseDisplay phase={1} />
          </div>
          <div>
            <div className="font-medium">Full Moon</div>
            <div className="text-xs text-gray-400">Day 1</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <MoonPhaseDisplay phase={2} />
          </div>
          <div>
            <div className="font-medium">Waning Gibbous</div>
            <div className="text-xs text-gray-400">Days 2-7</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <MoonPhaseDisplay phase={5} />
          </div>
          <div>
            <div className="font-medium">Last Quarter</div>
            <div className="text-xs text-gray-400">Day 8</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <MoonPhaseDisplay phase={6} />
          </div>
          <div>
            <div className="font-medium">Waning Crescent</div>
            <div className="text-xs text-gray-400">Days 9-15</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <MoonPhaseDisplay phase={9} />
          </div>
          <div>
            <div className="font-medium">New Moon</div>
            <div className="text-xs text-gray-400">Day 16</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <MoonPhaseDisplay phase={10} />
          </div>
          <div>
            <div className="font-medium">Waxing Crescent</div>
            <div className="text-xs text-gray-400">Days 17-22</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <MoonPhaseDisplay phase={13} />
          </div>
          <div>
            <div className="font-medium">First Quarter</div>
            <div className="text-xs text-gray-400">Day 23</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <MoonPhaseDisplay phase={14} />
          </div>
          <div>
            <div className="font-medium">Waxing Gibbous</div>
            <div className="text-xs text-gray-400">Days 24-30</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoonPhaseLegend;

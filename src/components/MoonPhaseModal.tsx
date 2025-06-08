import React from "react";

interface MoonPhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MoonPhaseModal: React.FC<MoonPhaseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-amber-400">
            Phases of Selûne
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
            <img
              src="/images/moons/Moon_x5.jpg"
              alt="Full Moon"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold mb-2">Full Moon</h3>
              <p className="text-gray-300">
                Selûne&apos;s illuminated side is facing Toril. Selûne appears
                to be completely illuminated by direct sunlight.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
            <img
              src="/images/moons/Moon_x6.jpg"
              alt="Waning Gibbous"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold mb-2">Waning Gibbous</h3>
              <p className="text-gray-300">
                Selûne appears to be more than one-half but not fully
                illuminated by direct sunlight. The fraction of Selûne&apos;s
                disk that is illuminated is decreasing.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
            <img
              src="/images/moons/Moon_x7.jpg"
              alt="Last Quarter"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold mb-2">Last Quarter</h3>
              <p className="text-gray-300">
                One-half of Selûne appears to be illuminated by direct sunlight.
                The fraction of Selûne&apos;s disk that is illuminated is
                decreasing.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
            <img
              src="/images/moons/Moon_x8.jpg"
              alt="Waning Crescent"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold mb-2">Waning Crescent</h3>
              <p className="text-gray-300">
                Selûne appears to be partly but less than one-half illuminated
                by direct sunlight. The fraction of Selûne&apos;s disk that is
                illuminated is decreasing.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
            <img
              src="/images/moons/Moon_x1.jpg"
              alt="New Moon"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold mb-2">New Moon</h3>
              <p className="text-gray-300">
                Selûne&apos;s unilluminated side is facing Toril. Selûne is not
                visible (except during a solar eclipse).
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
            <img
              src="/images/moons/Moon_x2.jpg"
              alt="Waxing Crescent"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold mb-2">Waxing Crescent</h3>
              <p className="text-gray-300">
                Selûne appears to be partly but less than one-half illuminated
                by direct sunlight. The fraction of the Selûne&apos;s disk that
                is illuminated is increasing.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
            <img
              src="/images/moons/Moon_x3.jpg"
              alt="First Quarter"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold mb-2">First Quarter</h3>
              <p className="text-gray-300">
                One-half of Selûne appears to be illuminated by direct sunlight.
                The fraction of Selûne&apos;s disk that is illuminated is
                increasing.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
            <img
              src="/images/moons/Moon_x4.jpg"
              alt="Waxing Gibbous"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold mb-2">Waxing Gibbous</h3>
              <p className="text-gray-300">
                Selûne appears to be more than one-half but not fully
                illuminated by direct sunlight. The fraction of Selûne&apos;s
                disk that is illuminated is increasing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-xs text-gray-500">
          © 2005 Wizards of the Coast, Inc., a subsidiary of Hasbro, Inc. All
          Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default MoonPhaseModal;

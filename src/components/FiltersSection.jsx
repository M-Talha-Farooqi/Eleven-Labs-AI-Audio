import React from "react";

const FiltersSection = () => {
  return (
    <div className="bg-gray-900 p-6 mt-3 text-white rounded-lg w-1/3">
      <h3 className="text-2xl font-semibold  mb-4">Apply Filters</h3>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Model</label>
        <select className="bg-gray-700 p-2 w-full rounded-lg text-white">
          <option>Andra (beta)</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Transpose</label>
        <input type="range" min="0" max="100" className="w-full" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">No. of generations</label>
        <input
          type="number"
          min="1"
          className="bg-gray-700 p-2 w-full rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Algorithm</label>
        <select className="bg-gray-700 p-2 w-full rounded-lg text-white">
          <option>Dio</option>
        </select>
      </div>

      <div className="mb-4 flex items-center">
        <input type="checkbox" className="form-checkbox mr-2" />
        <label className="text-gray-400">Clean Vocals</label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Harmony</label>
        <select className="bg-gray-700 p-2 w-full rounded-lg text-white">
          <option>Off</option>
        </select>
      </div>

      <button className="bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-lg w-full">
        Revocalize
      </button>
    </div>
  );
};

export default FiltersSection;

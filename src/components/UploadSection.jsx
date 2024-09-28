import React from "react";
import { Upload } from "lucide-react";

const UploadSection = () => {
  return (
    <div className="bg-gray-900 space-y-6 p-6 ml-0 mt-3 rounded-lg text-white w-full md:w-3/5 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Generate Audio</h2>

      {/* Button Section */}
      <div className="flex space-x-4 mb-8 justify-center md:justify-start">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center text-lg">
          <Upload className="w-5 h-5 mr-2" />
          Upload audio
        </button>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center text-lg">
          <span className="mr-2">🎙️</span>
          Record audio
        </button>
      </div>

      {/* Drag & Drop Section */}
      <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-600" />
        <p className="mb-2 text-xl">
          Drag & drop or <span className="text-purple-500">choose</span> your
          audio file
        </p>
        <p className="text-sm text-gray-500">Supported formats:</p>
        <div className="flex justify-center space-x-2 mt-4">
          <span className="bg-gray-800 px-3 py-1 rounded text-xs">.mp3</span>
          <span className="bg-gray-800 px-3 py-1 rounded text-xs">.ogg</span>
          <span className="bg-gray-800 px-3 py-1 rounded text-xs">.aiff</span>
          <span className="bg-gray-800 px-3 py-1 rounded text-xs">.wav</span>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="mt-6 bg-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span>My audio_Final_.mp3</span>
          <button className="text-gray-500">&times;</button>
        </div>
        <div className="bg-gray-700 h-3 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-3/4 h-full"></div>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span>1.25MB</span>
          <span>15 seconds left</span>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;

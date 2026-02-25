import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="mt-16 mb-16">
      <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
      
      <div className="bg-gradient-to-br bg-gradient-to-r from-amber-400/10 to-blue-500/10 border border-neutral-700 rounded-lg p-8 hover:border-neutral-600 transition-all">
        <div className="flex items-start gap-6">
          {/* University Icon */}
          <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
          </div>

          {/* Education Details */}
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-white mb-2">
              Bachelor of Computer Science (Honours)
            </h4>
            <p className="text-lg text-blue-400 mb-3">
              University of Windsor
            </p>
            <p className="text-gray-400 mb-4">
              Graduated 2024 • <span className="text-amber-400 font-semibold">Great Distinction</span>
            </p>

            {/* Averages */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                <p className="text-sm text-gray-400 mb-1">Major Average</p>
                <p className="text-3xl font-bold text-white">93.8<span className="text-xl">%</span></p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                <p className="text-sm text-gray-400 mb-1">Cumulative Average</p>
                <p className="text-3xl font-bold text-white">92.3<span className="text-xl">%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

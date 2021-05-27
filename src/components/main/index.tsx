// Import dependencies
import React from 'react';

// Export Main component
export const Main: React.FC = () => {
  return (
    <div className="text-center font-light py-5 bg-gray-700 flex-grow">
      <div className="container mx-auto">
        <h1 className="text-white text-8xl mb-2">Mavenger</h1>

        <p className="text-lg text-white mb-3">A next.js web-based manager for maven dependencies</p>
      </div>
    </div>
  );
};

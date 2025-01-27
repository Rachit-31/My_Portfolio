import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="relative flex items-center justify-center">
        {/* Outer spinner */}
        <div className="w-20 h-20 border-4 border-transparent animate-spin rounded-full border-t-blue-400"></div>
        {/* Inner spinner */}
        <div className="absolute w-16 h-16 border-4 border-transparent animate-spin rounded-full border-t-red-400"></div>
      </div>
    </div>
  );
};

export default Loader;
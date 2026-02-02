import React from 'react';

interface HelloGoogleProps {
  // No props needed for this component
}

/**
 * HelloGoogle Component
 * Displays the text 'Hello Google'.
 */
const HelloGoogle: React.FC<HelloGoogleProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Hello Google</h1>
    </div>
  );
};

export default HelloGoogle;
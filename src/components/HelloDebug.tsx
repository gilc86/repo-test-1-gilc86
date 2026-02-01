import React, { useState, useEffect } from 'react';

interface HelloDebugProps {
  // No props needed for this component
}

/**
 * HelloDebug Component
 * Displays 'Hello Debug Test' with the current timestamp.
 */
const HelloDebug: React.FC<HelloDebugProps> = () => {
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Hello Debug Test</h1>
      <p className="text-lg text-gray-600">Current Timestamp: {timestamp}</p>
    </div>
  );
};

export default HelloDebug;

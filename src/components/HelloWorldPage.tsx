import React from 'react';

interface HelloWorldPageProps {
  message?: string;
}

/**
 * HelloWorldPage component displays a simple "Hello, World!" message.
 * @param {HelloWorldPageProps} props - The component props.
 * @param {string} props.message - Optional message to display. Defaults to "Hello, World!".
 * @returns {JSX.Element} The rendered HelloWorldPage component.
 */
const HelloWorldPage: React.FC<HelloWorldPageProps> = ({ message = "Hello, World!" }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">{message}</h1>
    </div>
  );
};

export default HelloWorldPage;
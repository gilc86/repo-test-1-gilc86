import React, { useState, useEffect } from 'react';

interface HelloGiliResponse {
    message: string;
}

const HelloGiliPage: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/hello/gili');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: HelloGiliResponse = await response.json();
                setMessage(data.message);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Hello Gili!</h1>
            {loading && <p className="text-gray-600">Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {message && <p className="text-lg text-gray-800">{message}</p>}
        </div>
    );
};

export default HelloGiliPage;
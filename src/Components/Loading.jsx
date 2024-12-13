import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners'; // Importing ClipLoader from react-spinners

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 8000); // 3-second delay

    return () => clearTimeout(timer); // Clean up the timeout when the component unmounts
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {isLoading ? (
        // Display the loading spinner during the delay
        <ClipLoader color="#3498db" size={50} />
      ) : (
        // Optionally display a fallback message or component after loading
        <p className="text-xl text-gray-600">Page is loading...</p>
      )}
    </div>
  );
}

export default Loading;

import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorLayout() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src={require('../assets/error-404.png')}
        alt="Not Found"
        className="w-3/4 md:w-1/2 lg:w-1/3 h-auto mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={handleGoHome}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go Back Home
      </button>
    </section>
  );
}

export default ErrorLayout

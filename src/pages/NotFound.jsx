import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      {/* Header Section */}
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        The page you are looking for might have been removed or doesn't exist.
      </p>

      {/* CTA Button */}
      <Link to="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;

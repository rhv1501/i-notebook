import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to={"/"} className="text-blue-900">Click here to redirect</Link>
    </div>
  );
}

export default NotFound;

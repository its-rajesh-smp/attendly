import { Link } from "react-router";

function EventsPageFooter() {
  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-purple-600 text-white py-10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          Whether you're new or already part of our community, we're here to
          help you navigate and make the most out of our platform. Check out our
          guides or reach out for support.
        </p>
        <Link className="text-white underline" to="/help">
          its.rajeshsmp@gmail.com
        </Link>
      </div>
    </div>
  );
}

export default EventsPageFooter;

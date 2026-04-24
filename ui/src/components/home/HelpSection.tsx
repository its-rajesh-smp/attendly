import { Link } from "react-router";

function HelpSection() {
  return (
    <section className="py-10 bg-gradient-to-r from-purple-700 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Need Help Getting Started?
          </h2>
          <p className="mb-6 text-white">
            Whether you're new or already part of our community, we're here to
            help you navigate and make the most out of our platform. Check out
            our guide or reach out for support.
          </p>
          <Link className="text-white underline" to="/help">
            its.rajeshsmp@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;

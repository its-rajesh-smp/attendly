import { Button } from "@/components/ui/Button";
import { authNavigationPaths } from "@/constants/auth.const";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router";

const EventsHeader = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);

  return (
    <div className="bg-gradient-to-br from-green-400 via-purple-500 to-purple-700 text-white py-12 md:py-24 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Attendly</h1>
        <div className="text-3xl md:text-5xl font-bold mb-8">
          We Make <span className="text-yellow-300">Events Happen</span>
        </div>
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Discover amazing events happening around you. From concerts and
          workshops to conferences and meetups, we've got you covered!
        </p>
        <div className="flex justify-center space-x-4">
          {!isAuthenticated && (
            <Link to={authNavigationPaths.REGISTER}>
              <Button
                size={"lg"}
                className="bg-white text-purple-700  rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsHeader;

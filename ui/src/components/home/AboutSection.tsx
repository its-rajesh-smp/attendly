import { GIBLI_EVENT_IMAGE } from "@/assets";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { LazyImage } from "../ui/LazyImage";

function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <LazyImage
              src={GIBLI_EVENT_IMAGE}
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Discover Amazing Events</h2>
            <p className="text-gray-600 mb-6">
              Attendly helps you discover and join the most exciting events
              happening around you. From concerts and workshops to conferences
              and meetups, we've got you covered!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <CalendarDays className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Easy RSVP</h3>
                  <p className="text-sm text-gray-500">
                    Quick one-click RSVP to any event
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <MapPin className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Location Based</h3>
                  <p className="text-sm text-gray-500">
                    Find events near you easily
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Users className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Community</h3>
                  <p className="text-sm text-gray-500">
                    Connect with like-minded people
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

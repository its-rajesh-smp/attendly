import { GRID_PATTERN_IMAGE } from "@/assets";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/Button";
import { eventNavigationPaths } from "@/constants";
import { useFetch } from "@/hooks";
import type { IEvent } from "@/types";
import { createQuery } from "@/utils";
import { useState } from "react";
import { Link } from "react-router";
import Loader from "../ui/Loader";

function CurrentEventsSection() {
  const [loader, setLoader] = useState(true);
  const query = createQuery({
    limit: 3,
  });
  const paginatedEvents = useFetch(`/event/all${query}`, setLoader);

  return (
    <section id="current-events" className="py-16 relative lg:px-32 bg-gray-50">
      <img
        src={GRID_PATTERN_IMAGE}
        className="absolute top-0 left-0 w-full opacity-30 h-full object-cover "
      />
      <div className="relative z-10 flex flex-col justify-center items-center mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Current Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our most popular upcoming events and connect with amazing
            people from around the world
          </p>
        </div>

        {/* Events */}
        {loader ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paginatedEvents?.events?.map((event: IEvent) => (
              <EventCard {...event} key={event.id} />
            ))}
          </div>
        )}

        <Link to={eventNavigationPaths.EVENTS}>
          <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
            View All Events
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CurrentEventsSection;

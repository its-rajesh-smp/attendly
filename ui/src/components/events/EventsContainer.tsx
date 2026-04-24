import type { IEvent } from "@/types";
import EventCard from "../EventCard";
import EventsPagination from "./EventsPagination";

function EventsContainer({
  events,
  currentPage,
  totalPages,
  handlePageChange,
}: {
  events: IEvent[];
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}) {
  return (
    events.length > 0 && (
      <>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            totalPages <= 1 && "mb-10"
          }`}
        >
          {events.map((event) => (
            <EventCard
              key={`${event.id}+${event.isRsvpToEvent}`} // Doing this hack to force re-render
              {...event}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <EventsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </>
    )
  );
}

export default EventsContainer;

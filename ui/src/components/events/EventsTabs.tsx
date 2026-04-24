import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { useFetch } from "@/hooks";
import { useAppSelector } from "@/hooks/useAppSelector";
import useScroll from "@/hooks/useScroll";
import type { IEvent } from "@/types";
import { createQuery } from "@/utils";
import { useState } from "react";
import Loader from "../ui/Loader";
import EventsContainer from "./EventsContainer";

const ITEMS_PER_PAGE = 6;

function EventsTabs() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);
  const [loader, setLoader] = useState(true);
  const scrollTo = useScroll();

  const query = createQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    isRsvpToEvent: activeTab === "rsvp",
  });

  const paginatedEvents = useFetch(`/event/all${query}`, setLoader);
  const events: IEvent[] = paginatedEvents?.events || [];
  const totalPages = paginatedEvents?.pagination?.totalPages || 1;

  // Handle page change
  const handlePageChange = (page: number) => {
    console.log(page);
    scrollTo("events-section");
    setCurrentPage(page);
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    // scrollTo("events-section");
    setActiveTab(value);
    setCurrentPage(1); // reset to first page
  };

  return (
    <>
      <div id="events-section" className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Discover Events</h2>
      </div>

      <Tabs
        defaultValue="all"
        className="max-w-5xl px-2 mx-auto"
        onValueChange={handleTabChange}
      >
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="rsvp">My RSVP Events</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          {loader ? (
            <Loader />
          ) : events.length > 0 ? (
            <EventsContainer
              events={events}
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          ) : (
            <EmptyState message="No events found" />
          )}
        </TabsContent>

        <TabsContent value="rsvp" className="mt-0">
          {loader ? (
            <Loader />
          ) : events.length > 0 && isAuthenticated ? (
            <EventsContainer
              events={events}
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          ) : (
            <EmptyState message="No RSVP events found" />
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium text-gray-600">{message}</h3>
      <p className="text-gray-500 mt-2">Check back soon for updates!</p>
    </div>
  );
}

export default EventsTabs;

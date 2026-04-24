import EventsTabs from "@/components/events/EventsTabs";
import Footer from "@/components/ui/Footer";
import EventsHeader from "../components/events/EventsHeader";
import EventsPageFooter from "../components/events/EventsPageFooter";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <EventsHeader />
      <EventsTabs />
      <EventsPageFooter />
      <Footer />
    </div>
  );
};

export default EventsPage;

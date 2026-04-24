import { Button } from "@/components/ui/Button";
import { authNavigationPaths } from "@/constants/auth.const";
import { useAppSelector } from "@/hooks";
import { EventService } from "@/service";
import type { IEvent } from "@/types";
import { Logger } from "@/utils";
import { useState } from "react";
import { Link } from "react-router";
import { LazyImage } from "./ui/LazyImage";

function EventCard({
  title,
  thumbnail,
  description,
  date,
  id,
  isRsvpToEvent,
}: IEvent) {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);
  const [isCurrentRsvpToEvent, setIsCurrentRsvpToEvent] =
    useState(isRsvpToEvent);
  const [loading, setLoading] = useState(false);

  const handelRsvp = async () => {
    setLoading(true);
    try {
      if (isCurrentRsvpToEvent) {
        await EventService.unRsvpFromEvent(id);
      } else {
        await EventService.rsvpToEvent(id);
      }
      setIsCurrentRsvpToEvent(!isCurrentRsvpToEvent);
    } catch (error) {
      Logger.logError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl flex flex-col  overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="h-48 shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <LazyImage src={thumbnail} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex  flex-col">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(date).toDateString()}
          </span>
          {isAuthenticated ? (
            <Button
              loading={loading}
              onClick={handelRsvp}
              variant="outline"
              size="sm"
            >
              {isCurrentRsvpToEvent ? "Leave" : "RSVP"}
            </Button>
          ) : (
            <Link to={authNavigationPaths.REGISTER}>
              <Button
                className="bg-purple-400 text-white hover:bg-purple-500 hover:text-white"
                variant="outline"
                size="sm"
              >
                Join to RSVP
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;

import axiosInterceptors from "@/setup/axios.conf";

const rsvpToEvent = async (id: string) => {
  return axiosInterceptors.post(`/event-rsvp/${id}`);
};

const unRsvpFromEvent = async (id: string) => {
  return axiosInterceptors.delete(`/event-rsvp/${id}`);
};

export default {
  rsvpToEvent,
  unRsvpFromEvent,
};

import { useState } from "react";
import { EventList } from "../components/eventList";
import { IEvent } from "../interFaces";

export const MainPage: React.FC = () => {
  const [sportEvents, setSportEvents] = useState<IEvent[]>([]);

  const removeEvent = (id: number) => {
    setSportEvents((prev) => prev.filter((sportEvent) => id !== sportEvent.id));
  };
  return (
    <>
      <h1>Главная страница</h1>
      <hr />
      <EventList sportEvents={sportEvents} removeEvent={removeEvent} />
    </>
  );
};

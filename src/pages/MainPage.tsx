import { useState } from "react";
import { EventForm } from "../components/eventForm";
import { EventList } from "../components/eventList";
import { IEvent } from "../interFaces";

export const MainPage: React.FC = () => {
  const [sportEvents, setSportEvents] = useState<IEvent[]>([]);

  const addEvent = (eventName: string) => {
    if (eventName) {
      const newEvent = {
        id: Math.random(),
        title: eventName,
      };

      setSportEvents((prev) => [newEvent, ...prev]);
    }
  };

  const removeEvent = (id: number) => {
    setSportEvents((prev) => prev.filter((sportEvent) => id !== sportEvent.id));
  };
  return (
    <>
      <h1>Главная страница</h1>
      <EventForm addEvent={addEvent} />
      <hr />
      <EventList sportEvents={sportEvents} removeEvent={removeEvent} />
    </>
  );
};

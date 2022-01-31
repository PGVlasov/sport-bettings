import { CreateEvent } from "../components/CreateEvent";
import { useState } from "react";
import { IEvent } from "../interFaces";

const sportEvents = [];

export const CreateEventPage: React.FC = (props: any) => {
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
  return <CreateEvent />;
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { IEvent } from "../interFaces";

interface EventListProps {
  sportEvents: IEvent[];
  removeEvent: (id: number) => void;
}

export const EventList: React.FC<EventListProps> = ({
  sportEvents,
  removeEvent,
}) => {
  const history = useNavigate();

  let events: { id: number; name: string }[] = [
    { id: 0, name: "UEFA Europe Leage 1/16 final" },
    { id: 1, name: "Australian Open Final" },
  ];

  //   const clickHandler = (event: React.MouseEvent, id: number) => {
  //     event.preventDefault();

  //     console.log("c Arrliced");
  //   };

  const removeHandler = (event: React.MouseEvent, id: number) => {
    removeEvent(id);
  };

  //   if (sportEvents.length === 0) {
  //     return <p className="center">Пока что нет событий</p>;
  //   }

  return (
    <ul>
      {events.map((evt) => {
        const classes = ["sport-event"];
        return (
          <li className={classes.join(" ")} key={evt.id}>
            <label>
              <input
                type="checkbox"
                onClick={() => history("/sportEvent/:id")}
              />
              <span>{evt.name}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, evt.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

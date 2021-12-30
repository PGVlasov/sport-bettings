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
  //   const clickHandler = (event: React.MouseEvent, id: number) => {
  //     event.preventDefault();

  //     console.log("cliced");
  //   };

  const removeHandler = (event: React.MouseEvent, id: number) => {
    removeEvent(id);
  };

  if (sportEvents.length === 0) {
    return <p className="center">Пока что нет событий</p>;
  }

  return (
    <ul>
      {sportEvents.map((sportEvent) => {
        const classes = ["sport-event"];
        return (
          <li className={classes.join(" ")} key={sportEvent.id}>
            <label>
              <input
                type="checkbox"
                onClick={(event) => history("/sportEvent/:id")}
              />
              <span>{sportEvent.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, sportEvent.id)}
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

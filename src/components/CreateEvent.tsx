import React, { useState } from "react";
import { IEvents } from "../interFaces";

// interface EventFormProps {
//   addEvent(eventName: string): void;
// }

export const CreateEvent: React.FC = (props: any) => {
  const [eventName, setEventName] = useState<string>("");
  const [events, setEvents] = useState<IEvents[]>([]);
  const [rival1, setRival1] = useState<string>("");
  const [rival2, setRival2] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEventName(event.target.value);
  };

  const changeHandler1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setRival1(event.target.value);
  };
  const changeHandler2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setRival2(event.target.value);
  };

  const addRivalsHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const evt = events.concat();
    const index = evt.length + 1;

    const eventItem = {
      id: index,
      rivals: [{ team1: rival1 }, { team2: rival2 }],
    };

    evt.push(eventItem);

    setEvents(evt);
    setRival1("");
    setRival2("");
  };

  const createEventHandler = (event: React.MouseEvent) => {
    let data = {
      events,
    };
    console.log(data);

    setEventName("");
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.addEvent(eventName);
      setEventName("");
    }
  };

  return (
    <React.Fragment>
      <h1>Создение спортивного события</h1>
      <div className="input-field mt2">
        <input
          type="text"
          id="title"
          placeholder="Введите название события"
          value={eventName}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
        />
        <label htmlFor="title" className="active">
          Введите название
        </label>
        <hr />
        <input
          type="text"
          id="title1"
          placeholder="Соперник1"
          value={rival1}
          onChange={changeHandler1}
          onKeyPress={keyPressHandler}
        />
        <label htmlFor="title" className="active">
          Введите название
        </label>
        <input
          type="text"
          id="title2"
          placeholder="Соперник1"
          value={rival2}
          onChange={changeHandler2}
          onKeyPress={keyPressHandler}
        />
        <label htmlFor="title" className="active">
          Введите название
        </label>
        <hr />
        <div className="btns">
          <button
            disabled={rival1.length <= 2 || rival2.length <= 2}
            className="btn"
            onClick={(event) => addRivalsHandler(event)}
          >
            Добавить пару
          </button>

          <button
            disabled={events.length === 0}
            className="btn red"
            onClick={(event) => createEventHandler(event)}
          >
            Создать событые
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

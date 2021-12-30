import React, { useState } from "react";

interface EventFormProps {
  addEvent(eventName: string): void;
}

export const EventForm: React.FC<EventFormProps> = (props) => {
  const [eventName, setEventName] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEventName(event.target.value);
  };

  const submitHandler = () => {
    props.addEvent(eventName);
    setEventName("");
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.addEvent(eventName);
      setEventName("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Введите название......"
        value={eventName}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название
      </label>
      <button className="btn" onClick={() => submitHandler()}>
        Добавить событые
      </button>
    </div>
  );
};

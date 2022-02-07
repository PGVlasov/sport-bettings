import { type } from "os";
import { title } from "process";
import React, { useState } from "react";
import { IEvents } from "../interFaces";

// interface EventFormProps {
//   addEvent(eventName: string): void;
// }
type Event = {
  Sides: [Sides];
};

type Rival = {
  // id: string;
  title: string;
};

type Sides = "side1" | "side2";

// type Rivals = {
//   side1: Rival | null;
//   side2: Rival | null;
// };

type Rivals2 = Record<Sides, Rival | undefined>;

// const rivals1: Rivals = {
//   side1: {
//     title: "some title",
//   },
//   side2: {
//     title: "asdasdasd",
//   },
// };

// type Props = {
//   sendData: (rivals: Rival[]) => void;
// };

export const CreateEvent = (props: any) => {
  const [eventName, setEventName] = useState<string>("");
  const [events, setEvents] = useState<IEvents[]>([]);
  const [rivals, setRivals] = useState<Rivals2>({
    side1: undefined,
    side2: undefined,
  });
  const [array, setArray] = useState<any[]>([]);

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEventName(event.target.value);
  };

  const setRival = (
    side: Sides,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setRivals((prevState) => ({
      ...prevState,
      [side]: {
        title: event.target.value,
      },
    }));
  };

  const setRivalEmpty = (
    side: Sides,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setRivals((prevState) => ({
      ...prevState,
      [side]: {
        title: "",
      },
    }));
  };

  const addRivalsHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    // const index = evt.length + 1

    const newItem = rivals;
    setArray((prev) => [...prev, newItem]);
    //   title1: rivals[0],
    //   title2: rivals[1]
    // console.log(newItem);
    // arr.push([newItem]);
    // console.log(arr);
    // console.log(arr[0].rivals);
    console.log(array);
  };

  const createEventHandler = (event: React.MouseEvent) => {
    let data = {
      eventName: eventName,
      rivalsArray: array,
    };
    console.log(data);
    try {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.log(e);
    }

    setEventName("");
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.addEvent(eventName);
      // setEventName("");
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
          onChange={changeTitleHandler}
          onKeyPress={keyPressHandler}
        />
        <label htmlFor="title" className="active">
          Введите название
        </label>

        <input
          type="text"
          id="title1"
          placeholder="Соперник 1"
          value={rivals.side1?.title}
          onChange={(e) => setRival("side1", e)}
          onKeyPress={keyPressHandler}
        />

        <input
          type="text"
          id="title2"
          placeholder="Соперник 2"
          value={rivals.side2?.title}
          onChange={(e) => setRival("side2", e)}
          onKeyPress={keyPressHandler}
        />
        <label htmlFor="title" className="active">
          Введите название
        </label>
        <div className="btns">
          <button
            className="btn"
            disabled={
              rivals.side1?.title === undefined ||
              rivals.side2?.title === undefined
            }
            onClick={(event) => addRivalsHandler(event)}
          >
            Добавить пару
          </button>

          <button
            disabled={
              rivals.side1?.title === undefined ||
              rivals.side2?.title === undefined
            }
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

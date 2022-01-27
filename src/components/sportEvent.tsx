import React, { useState } from "react";

type sportEventProps = {
  setCheckedValue: (value: string) => void;
};

export const SportEvent: React.FC = () => {
  const [checkedValue, setCheckedValue] = useState<string>("");
  const arr: Array<string> = [];
  const events = [
    {
      id: 1,
      name: "pair1",
      team1: "Zenit",
      team2: "Betis",
    },
    {
      id: 2,
      name: "pair2",
      team1: "Braga",
      team2: "Sheriff",
    },
    {
      id: 3,
      name: "pair3",
      team1: "Dortmund",
      team2: "Rangers",
    },
    {
      id: 4,
      name: "pair4",
      team1: "Napoli",
      team2: "Barselona",
    },
  ];
  const changeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    event.stopPropagation();
    const newAnswer = event.target.value;
    setCheckedValue(newAnswer);
  };

  const clickHandler = (event: React.FormEvent) => {
    console.log(checkedValue);
  };
  return (
    <div>
      <h1>1/16 Плей-Офф Лиги Европы сезона 21-22</h1>

      <p>Выберете победителя пары</p>
      {events.map((evt) => {
        return (
          <form action="#" key={evt.id}>
            <p>
              <label>
                <input
                  name={evt.name}
                  type="radio"
                  value={evt.team1}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                />
                <span>{evt.team1}</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name={evt.name}
                  type="radio"
                  value={evt.team2}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                />
                <span>{evt.team2}</span>
              </label>
            </p>
            <hr />
          </form>
        );
      })}

      <button className="btn" onClick={(event) => clickHandler(event)}>
        Проголосовать
      </button>
    </div>
  );
};

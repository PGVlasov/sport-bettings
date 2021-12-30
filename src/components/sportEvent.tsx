import React, { useState } from "react";

export const SportEvent: React.FC = () => {
  const [checkedValue, setCheckedValue] = useState("");
  const changeHandler = (event: React.MouseEvent) => {
    setCheckedValue("1");
  };

  const clickHandler = () => {
    console.log("Value", checkedValue);
  };
  return (
    <div>
      <h1>Sport Event</h1>
      <form action="#">
        <p>Выберете победителя пары</p>
        <p>
          <label>
            <input name="group1" type="radio" checked onChange={() => {}} />
            <span>Зенит</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" onChange={() => {}} />
            <span>Бетис</span>
          </label>
        </p>
        <button onClick={() => clickHandler()}>Проголосовать</button>
      </form>
    </div>
  );
};

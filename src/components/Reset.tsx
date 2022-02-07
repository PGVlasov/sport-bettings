import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Reset: React.FC = (props: any) => {
  const [isFormValid, setFormValid] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const history = useNavigate();

  const validateEmail = (userEmail: string) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(userEmail);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateEmail(userEmail)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    setUserEmail(event.target.value);
  };

  const resetHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    let data = {
      email: userEmail,
    };

    fetch("http://localhost:3001/reset", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    history("/auth");
  };

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input
              placeholder="введите email"
              value={userEmail}
              onChange={changeHandler}
              id="email"
              type="email"
              className="validate"
            />
          </div>
        </div>
        <div className="btns">
          <button
            className="btn green"
            onClick={(event) => resetHandler(event)}
            disabled={!isFormValid}
          >
            Сбросить пароль
          </button>
        </div>
      </form>
    </div>
  );
};

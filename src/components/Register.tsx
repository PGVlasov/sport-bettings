import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props: any) => {
  const history = useNavigate();
  const [isFormValid, setFormValid] = useState<boolean>(false);

  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const validateEmail = (userEmail: string) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(userEmail);
  };
  const validatePassword = (userPassword: string) => {
    if (userPassword.length > 4) return true;
  };
  const validateName = (userName: string) => {
    if (userName.length > 2) return true;
  };

  const validate = (
    userEmail: string,
    userPassword: string,
    userName: string
  ) => {
    if (
      validateEmail(userEmail) &&
      validatePassword(userPassword) &&
      validateName(userName)
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
    validate(userEmail, userPassword, userName);
  };
  const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    validate(userEmail, userPassword, userName);
  };
  const changePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserPassword(event.target.value);
    validate(userEmail, userPassword, userName);
  };

  const registerHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    let data = {
      email: userEmail,
      password: userPassword,
      name: userName,
    };

    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    history("/auth");
    console.log({ userEmail, userName, userPassword });
  };

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">face</i>
            <input
              value={userName}
              placeholder="введите имя, минимум 2 символа"
              id="first_name"
              type="text"
              className="validate"
              onChange={changeNameHandler}
            />
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input
              value={userEmail}
              placeholder="введите email"
              id="email"
              type="email"
              className="validate"
              onChange={changeEmailHandler}
            />
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">password</i>
            <input
              value={userPassword}
              id="password"
              placeholder="введите пароль, минимум 6 символов"
              type="password"
              className="validate"
              onChange={changePasswordHandler}
            />
          </div>
        </div>
        <div className="btns">
          <button
            disabled={!isFormValid}
            className="btn green"
            onClick={(event) => registerHandler(event)}
          >
            Зарегестрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

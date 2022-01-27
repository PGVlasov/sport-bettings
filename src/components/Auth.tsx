import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = (props: any) => {
  const history = useNavigate();
  const [isFormValid, setFormValid] = useState<boolean>(false);

  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const validateEmail = (userEmail: string) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(userEmail);
  };
  const validatePassword = (userPassword: string) => {
    if (userPassword.length > 4) return true;
  };

  const validate = (userEmail: string, userPassword: string) => {
    if (validateEmail(userEmail) && validatePassword(userPassword)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
    validate(userEmail, userPassword);
  };

  const changePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserPassword(event.target.value);
    validate(userEmail, userPassword);
  };

  const authHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log({ userEmail, userPassword });
  };

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input
              placeholder="введите email"
              id="email"
              type="email"
              className="validate"
              value={userEmail}
              onChange={changeEmailHandler}
            />
            <label htmlFor="icon_prefix"></label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">password</i>
            <input
              id="password"
              placeholder="введите пароль"
              type="password"
              className="validate"
              value={userPassword}
              onChange={changePasswordHandler}
            />
          </div>
        </div>
        <div className="btns">
          <button
            className="btn"
            disabled={!isFormValid}
            onClick={(event) => authHandler(event)}
          >
            Войти
          </button>
          <button className="btn blue" onClick={() => history("/register")}>
            Создать акаунт
          </button>
          <button className="btn red" onClick={() => history("/reset")}>
            Забыли пароль?
          </button>
        </div>
      </form>
    </div>
  );
};

import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useNavigate();
  return (
    <>
      <h1>Страница Информации</h1>
      <p>Some information about Project</p>
      <button className="btn" onClick={() => history("/")}>
        На главную страницу
      </button>
    </>
  );
};

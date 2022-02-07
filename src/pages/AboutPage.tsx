import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useNavigate();

  //const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/users").then((res) => res.json());

    // eslint-disable-next-line
  }, []);
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

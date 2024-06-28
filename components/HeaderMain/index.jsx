import { Link } from "react-router-dom";
import "./style.css";

function HeaderMain() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Lista de Usuários</h1>
        </div>

        <div className="btn-newPost">
          <Link to="/post">
            <button>Novo Usuário</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
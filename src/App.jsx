import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ThirdPost from "./pages/Third/ThirdPost";



function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>МАРКЕТ</h1>
          <nav className="nav">
            <ul className="navbar">
              <Link className="link" to={'/'}> Дом</Link>
              <Link className="link" to={'/post'}> Курсы</Link>

              <Link className="link" to={'/thirdpost'}> About</Link>

              <Link className="link" to={'/secondpost'}>Команда</Link>
              <li>Blog</li>
              <li><a className="link" href="tel:+996557007814">Контакт</a></li>
              <div className="icon">
                <FontAwesomeIcon className="icon-search" icon={faSearch} style={{ color: "#acb3be" }} />
              </div>
            </ul>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thirdpost" element={<ThirdPost />} />



      </Routes>
    </BrowserRouter>




  );
}

export default App;

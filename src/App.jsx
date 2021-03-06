import "./App.css";
import { Footer } from "./components/Footer/Footer";
// import UnderContruction from "./views/UnderContruction/UnderContruction.jsx";
import MenuBar from "./components/MenuBar/MenuBar";
import MyGallery from "./components/MyGallery/MyGallery";
import Main from "./views/Main";

function App() {
  return (
    <div className="app">
      <MenuBar></MenuBar>
      <MyGallery></MyGallery>
      <div className="app-body">
        <div className="content">
          <div className="inner">
            <Main></Main>
          </div>
        </div>
      </div>

      <div className="app-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

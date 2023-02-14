import "../asset/css/style.css";
import "../asset/css/responsive.css";
import { BrowserRouter } from "react-router-dom";
import Menu from "../menu/menu";
function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;

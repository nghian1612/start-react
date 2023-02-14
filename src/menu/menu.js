import BottomMenu from "./bottom-menu";
import TopMenu from "./top-menu";
function Menu() {
  return (
    <header id="page-header" className="page-header-stick">
      <TopMenu />
      <BottomMenu />
    </header>
  );
}

export default Menu;

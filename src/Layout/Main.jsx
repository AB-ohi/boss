import { Outlet, useLocation } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import NavBer from "../page/Shared/NavBer/NavBer";

const Main = () => {
  const location = useLocation();
  const pathLocation = location.pathname;
  const noHeaderFooter =pathLocation.includes("login") || pathLocation.includes("singUp");
  return (
    <div>
      {noHeaderFooter || <NavBer></NavBer>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;

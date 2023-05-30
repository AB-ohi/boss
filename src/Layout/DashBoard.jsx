import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart()
  return (
    <div className="drawer drawer-mobile bg-[#F3F3F3]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 text-base-content gap-4">
          {/*-- Sidebar content here --*/}
          <li>
            <NavLink to='/dashboard/home'>
              <FaHome></FaHome>FaHome
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history'>
              <FaCalendarAlt></FaCalendarAlt>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history'>
              <FaWallet></FaWallet>Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/mycart'>
              <FaShoppingCart></FaShoppingCart>My Cart
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">OUR MENU</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;

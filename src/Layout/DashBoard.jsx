import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUser,
  FaBook,
  FaUtensils,
} from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer drawer-mobile bg-[#F3F3F3]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >Open Menu</label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 text-base-content gap-4">
          {/*-- Sidebar content here --*/}
          {isAdmin ? (
            <>
            <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils>add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <TfiMenuAlt></TfiMenuAlt>manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUser></FaUser>all users
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaCalendarAlt></FaCalendarAlt>User Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
            </>
          )}
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

import React from "react";
import { Link } from "react-router-dom";
import orderImg from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const NavBer = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin()
  const [cart] = useCart();
  console.log(cart);
  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const NavList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
     
        {
          isAdmin? <li><Link to= "/dashboard/adminHome" >Dashboard</Link></li>:
          <li><Link to= "/dashboard/userHome" >Dashboard</Link></li>
        }
     
      <li>
        <Link to="/order/pizza">Our Shop</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      <li>
        {user ? (
          <>
            <Link onClick={handelLogout}>Log out</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-gray-50 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu sm:text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavList}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl flex flex-col">
            <h1>BISTRO BOSS</h1>
            <h1>Restaurant</h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavList}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
              {user ? (
                <>
                  <p>{user?.displayName}</p>
                </>
              ) : (
                <>
                </>
              )}
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img className="rounded-full" src={user?.photoURL}></img>
              ) : (
                <img className="rounded-full" src="https://static.vecteezy.com/system/resources/previews/002/412/377/original/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBer;

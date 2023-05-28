import React from "react";
import { Link } from "react-router-dom";
import orderImg from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const NavBer = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  console.log(cart)
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
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/order/pizza">
          Our Shop <img className="w-14" src={orderImg} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/">
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
            <p>{user?.displayName}</p>
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBer;

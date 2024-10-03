import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import logo from '../../../public/logo.png';
import { MdLockOutline } from 'react-icons/md';

const Navbar = () => {
  const user = true;
  const handleSignout = () => {};
  const navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#24774F] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#24774F]'
          }
        >
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#24774F] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#24774F]'
          }
        >
          <span>About</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Donate"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#24774F] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#24774F]'
          }
        >
          <span>Donate</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Donate"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#24774F] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#24774F]'
          }
        >
          <span>Donate</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Gallery"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#24774F] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#24774F]'
          }
        >
          <span>Gallery</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Contact"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#24774F] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#24774F]'
          }
        >
          <span>Contact</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-5 px-4 ">
        <header className="bg-white shadow-lg  flex justify-between items-center w-full  ">
          <div>
            <div className="dropdown z-10 md:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost ">
                <img
                  className=" md:w-[280px] w-full lg:h-[65px] h-[60px]  "
                  // src={logo}
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navitems}
              </ul>
            </div>
            <Link
              to="/"
              className=" flex flex-shrink-0 items-center gap-2  md:w-[180px] w-[150px] "
            >
              <img
                className=" md:w-[280px] w-full lg:h-[65px] h-[60px]  "
                // src={logo}
                alt=""
              />
            </Link>
          </div>
          {/* middle */}
          <ul className=" justify-center items-center gap-6 hidden lg:flex">
            {navitems}
          </ul>
          {/* End */}
          <div className="flex justify-center items-center gap-3">
            {user ? (
              <div className="  flex items-center  justify-end ml-4">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      title={user?.displayName}
                      className="w-10 rounded-full"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {/* <li>
                    <p className="text-green-600 font-bold">
                      {user?.displayName}
                    </p>
                  </li> */}
                    {navitems}
                    <li>
                      <Link
                        className=" text-[#FF3811] font-bold "
                        onClick={handleSignout}
                      >
                        SignOut
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="  w-full md:w-auto   ">
                <div className="flex justify-center items-center pl-2 ">
                  <Link
                    to={'/login'}
                    onClick=""
                    className="btn bg-[#00C2CB] text-white flex justify-center items-center gap-2 text-xl"
                  >
                    <MdLockOutline />
                    LogIn
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;

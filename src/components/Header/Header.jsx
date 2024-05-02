import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const MobileMenu = () => (
    <ul className="fixed top-20 bottom-0 right-0 left-0 flex items-center flex-col z-10 bg-gray-500 justify-center gap-20 space-x-3 transition-transform ">
      {navItems &&
        navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => {
                  navigate(item.slug), setMenu(false);
                }}
                className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}
      {authStatus && (
        <li>
          <LogoutBtn />
        </li>
      )}
    </ul>
  );
  return (
    <header className="py-3 shadow bg-gray-500 ">
      <Container>
        <nav className="flex justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className={` ${menu ? "flex" : "hidden"} ml-auto hidden md:flex`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          {menu && <MobileMenu />}
          <button
            className="flex justify-end p-4 md:hidden"
            onClick={() => setMenu(!menu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

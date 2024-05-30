import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main className="min-h-[80vh]">
          <Outlet />
        </main>
        <Footer />
        {/* <h1>This loads</h1> */}
      </div>
    </div>
  ) : (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 rounded-full animate-pulse bg-violet-400"></div>
          <div className="w-8 h-8 rounded-full animate-pulse bg-violet-400"></div>
          <div className="w-8 h-8 rounded-full animate-pulse bg-violet-400"></div>
        </div>
      </div>
    </>
  );
}

export default App;

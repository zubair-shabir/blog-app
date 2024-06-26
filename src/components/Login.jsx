import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

import { BiShow, BiHide } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authlogin(userData));
        setTimeout(() => {
          navigate("/all-posts");
        }, 500);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full my-20">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <div className="relative">
              <Input
                label="Password: "
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(login)();
                  }
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="absolute top-1/2 transform right-2 text-2xl focus-visible:outline-none"
              >
                {showPassword ? <BiHide /> : <BiShow />}
              </button>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

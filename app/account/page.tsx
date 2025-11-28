"use client";
import React, { useState } from "react";

export default function AccountLogIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const formChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);

    await fetch("/api/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    setLoginData({ email: "", password: "" });
  };

  return (
    <>
      <form
        onSubmit={formSubmit}
        className="bg-stone-200 text-gray-700 flex p-2"
      >
        <div className="">
          <img
            src="https://i.pinimg.com/736x/3c/2d/5b/3c2d5bacd062f5c8a4f44f7830538f53.jpg"
            alt="image"
            className="w-full shadow-2xl"
          />
        </div>
        <div className="p-5 w-2xl flex flex-col items-center justify-center shadow-xl">
          <h1 className="text-4xl mb-3">Login</h1>
          <div>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={formChange}
              placeholder="Email"
              required
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={formChange}
              id="Password"
              placeholder="Password"
              required
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4"
            />
          </div>
          <div className="mt-5 mb-3">
            <button className="border text-sm h-8 w-20 rounded-full cursor-pointer hover:bg-white">
              Sign In
            </button>
          </div>
          <div className="text-center text-sm text-gray-600  mb-10">
            <p className="mb-3 underline underline-offset-4">
              <a href="#recover">Forgot your password?</a>
            </p>
            <p>
              Don't have an account?
              <a
                href="/account/register"
                className="underline underline-offset-4"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

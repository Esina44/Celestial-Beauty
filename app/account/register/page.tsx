"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(register),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration Failed!!");
        return;
      }

      router.push("/account");
    } catch {
      setError("Something went wrong!!!");
    } finally {
      setLoading(false);
    }
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
          <h1 className="text-4xl mb-3">Create Account</h1>
          {error && <p className="text-red-600 mb-10">{error}</p>}
          <div>
            <input
              type="text"
              name="firstName"
              value={register.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={register.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="Password"
              value={register.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={register.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={register.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>

          <div className="mt-5 mb-3">
            <button
              type="submit"
              disabled={loading}
              className="border text-sm h-8 w-20 rounded-full cursor-pointer hover:bg-white"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
          <div className="text-center text-sm text-gray-600  mb-10">
            <p>
              Already have an account?
              <a
                href="/account/register"
                className="underline underline-offset-4"
              >
                Sign In!
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

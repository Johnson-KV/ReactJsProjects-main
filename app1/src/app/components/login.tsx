"use client";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/slices/authSlice";
import { AppDispatch } from "@/store";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5138/api/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      const token = response.data.token;
      const user = response.data.user; // backend should return user info

      dispatch(setCredentials({ token, user }));

      setMessage("Login successful!");
    } catch (error: any) {
      if (error.response) {
        setMessage(`Login failed: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        setMessage("No response from server. Please try again later.");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-gray-500">
      <h2 className="text-xl font-semibold text-center">Login</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      >
        Login
      </button>
      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </form>
  );
}

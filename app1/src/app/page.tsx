"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Card from "./components/card";
import Login from "./components/login";
import Register from "./components/register";
import ProfileCard from "./components/profilecard";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <main className="min-h-dvh grid place-items-center bg-gray-50 p-6">
      <Card>
        {/* If logged in → show profile */}
        {token ? (
          <ProfileCard />
        ) : (
          <>
            {isLogin ? <Login /> : <Register />}

            <div className="mt-4 text-center text-gray-500">
              {isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <button
                    className="text-blue-500 underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    className="text-blue-500 underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </>
        )}
      </Card>
    </main>
  );
}

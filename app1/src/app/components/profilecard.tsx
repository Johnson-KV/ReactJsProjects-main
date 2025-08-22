// src/components/ProfileCard.tsx
"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function ProfileCard() {
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);

  if (!token) return <div>Not logged in</div>;

  return (
    <div className="p-4 border rounded shadow-md text-gray-700">
      <h2 className="text-lg font-semibold mb-2">Profile</h2>
      <p><strong>Token:</strong> {token}</p>
      {user && (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Status:</strong> {user.status}</p>
        </>
      )}
    </div>
  );
}

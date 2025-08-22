"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./index";

export default function SyncReduxToLocalStorage() {
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    localStorage.setItem("reduxState", JSON.stringify(auth));
  }, [auth]);

  return null; // nothing visible, just syncing
}

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Canceled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities([]);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <h2>Sorry to see you go.</h2>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Go back to shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
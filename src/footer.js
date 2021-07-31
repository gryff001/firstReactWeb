import React from "react";
import { NavLink } from "react-router-dom";
const footer = () => {
  return (
    <div>
      <footer class="bg-outline-light text-center text-lg-start">
        <div
          class="text-center p-3"
        >
          ©Akash 2021 Copyright:
          <NavLink class="text-dark" exact to="/">
            HOME
          </NavLink>
        </div>
      </footer>
    </div>
  );
};
export default footer;
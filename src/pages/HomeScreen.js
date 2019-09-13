import React from "react";
import { Body1, Headline1 } from "@material/react-typography";

import './HomeScreen.css';
const HomeScreen = () => {
  return (
    <div className="HomeScreen__div">
      <Headline1 >This is the Home Screen</Headline1>
      <Body1 >This is the homescreen for Simple Login Page</Body1>
    </div>
  );
};

export default HomeScreen;

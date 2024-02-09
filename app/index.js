import React from "react";
import { Redirect } from "expo-router";

window.navigator.userAgent = "ReactNative";
const index = () => {
  return <Redirect href="/screens/home" />;
};

export default index;

import { Image } from "react-native";
import React from "react";
import styles from "./style";

const Logo = ({style={}}) => {
  return (
    <Image
      resizeMode="contain"
      style={[styles.container,style]}
      source={{
        uri: "https://media.licdn.com/dms/image/C4D1BAQHWPNkUXk4SpA/company-background_10000/0/1546599057573?e=1689696000&v=beta&t=n5y8AeiD79S9SxhJy7rA0hIH6S_bGnQIAfucG3k8Jec",
      }}
    />
  );
};

export default Logo;

import {TouchableOpacityProps} from "react-native";
import React from "react";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  className?: string;
  textStyle?: string;
}
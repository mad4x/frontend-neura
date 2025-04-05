import {TouchableOpacityProps} from "react-native";
import React from "react";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  className?: string;
  textStyle?: string;
}

declare interface CardProps {
  title: string;
  titleStyle?: string;
  description: string;
  descriptionStyle?: string;
  buttonTitle: string;
  onPress?: () => void;
  className?: string;
  classNameIcons?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
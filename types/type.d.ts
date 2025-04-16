import {TouchableOpacityProps} from "react-native";
import React from "react";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  onPress?: () => void;
  className?: string;
  textStyle?: string;
}

declare interface AudioRecordingProps {
  onRecordingFinished: (uri: string) => void;
}

declare interface AudioCaptureScreenProps {
  refreshSentence: () => void;
}

declare interface CardProps {
  title: string;
  titleStyle?: string;
  description: string | React.ReactNode<Text>;
  descriptionStyle?: string;
  buttonTitle: string;
  onPress?: () => void;
  className?: string;
  classNameIcons?: string;
  bgColor?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
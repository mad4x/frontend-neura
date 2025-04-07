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
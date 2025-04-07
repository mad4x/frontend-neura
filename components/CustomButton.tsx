import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonProps } from "@/types/type";

const CustomButton = ({
  title,
  className,
  onPress,
  IconLeft,
  IconRight,
  textStyle,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-[20px] shadow-black elevation-xl self-start flex flex-row gap-x-3 items-center ${className}`}
      {...props}
    >
      {IconLeft}
      <Text className={`font-bold uppercase ${textStyle}`}>{title}</Text>
      {IconRight}
    </TouchableOpacity>
  )
}
export default CustomButton

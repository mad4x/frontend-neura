import {View, Text, Image} from 'react-native'
import React from 'react'
import CustomButton from "@/components/CustomButton";
import {CardProps} from "@/types/type";
import {icons} from "@/constants";

const CustomCard = ({
    title,
    titleStyle = "text-white",
    description,
    descriptionStyle = "text-white",
    buttonTitle,
    onPress,
    iconLeft,
    iconRight,
    className = "bg-blue-950",
    ...props
}: CardProps) => {
    return (
        <View className={`rounded-xl p-4 w-auto h-auto items-center align-items ${className}`} {...props}>
            <View className={"flex flex-row gap-x-2 items-center justify-center"}>
                {iconLeft}
                <Text className={`text-4xl font-bold text-center ${titleStyle}`}>{title}</Text>
                {iconRight}
            </View>

            <Text className={`text-lg mt-5 text-center ${descriptionStyle}`}>{description}</Text>
            <CustomButton title={buttonTitle} onPress={onPress} className="bg-blue-800 mt-5 self-center" textStyle="text-lg text-white tracking-widest"/>
        </View>
    )
}
export default CustomCard
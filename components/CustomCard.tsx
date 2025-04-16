import {View, Text} from 'react-native'
import React from 'react'
import CustomButton from "@/components/CustomButton";
import {CardProps} from "@/types/type";

const CustomCard = ({
    title,
    titleStyle = "text-white text-4xl font-bold text-center",
    description,
    descriptionStyle = "text-white text-center text-xl",
    buttonTitle,
    onPress,
    iconLeft,
    iconRight,
    bgColor = "bg-[#133250]",
    className,
    ...props}: CardProps) => {
    return (
        <View className={`rounded-xl p-10 w-auto h-auto items-center align-items elevation-xl gap-y-4 ${bgColor} ${className}`} {...props}>
            <View className={"flex flex-row gap-x-2 items-center justify-center"}>
                {iconLeft}
                <Text className={`${titleStyle}`}>{title}</Text>
                {iconRight}
            </View>

            <Text className={`mt-5 ${descriptionStyle}`}>{description}</Text>
            <CustomButton title={buttonTitle} onPress={onPress} className="bg-blue-800 mt-8 self-center px-20 py-6" textStyle="text-lg text-white tracking-widest"/>
        </View>
    )
}
export default CustomCard
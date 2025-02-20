import {View, SafeAreaView, Dimensions} from 'react-native'
import React, {ReactNode} from 'react'
import Svg from "react-native-svg";
import { WaveAnimations } from './WaveAnimations';

// Dimensioni originali dell'SVG (dal viewBox)
const originalWidth = 210;
const originalHeight = 297;

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const darkColor = "#0b1e30";
const mediumColor = "#0f2840";
const lightColor = "#133250";

const colors = { lightColor, mediumColor, darkColor };

type BackgroundProps = {
  children: ReactNode; // Tipo corretto per i figli
  className?: string;
};

const Background: React.FC<BackgroundProps> = ({ children, className }) => {
  return (
      <SafeAreaView className={`relative ${className}`}>
          {/* I children sono posizionati sopra il background */}
          <View className="absolute top-0 left-0 right-0 bottom-0 z-1">
              {children}
          </View>

          <Svg height={screenHeight} width={screenWidth}>

              <WaveAnimations
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                  originalWidth={originalWidth}
                  originalHeight={originalHeight}
                  colors={colors}
              />
      </Svg>
    </SafeAreaView>
  )
}

export default Background

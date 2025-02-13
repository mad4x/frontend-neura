import {View, Text, SafeAreaView, Dimensions} from 'react-native'
import React, {ReactNode} from 'react'
import Svg, {Path} from "react-native-svg";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const dynamicPath = `
  M0,${screenHeight * 0.5} 
  C${screenWidth * 0.375},${screenHeight * 0.1} 
  ${screenWidth * 0.75},${screenHeight * 0.9} 
  ${screenWidth},${screenHeight * 0.5} 
  L${screenWidth},${screenHeight} 
  L0,${screenHeight} 
  Z
`;

type BackgroundProps = {
  children: ReactNode; // Tipo corretto per i figli
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <SafeAreaView className="flex flex-col align-center h-screen border border-amber-500">
      {children}

      <Svg height={screenHeight} width={screenWidth}>
        <Path
          d={dynamicPath}
          fill="#6CA0DC"
        />
      </Svg>
    </SafeAreaView>
  )
}

export default Background

import {View, SafeAreaView, Dimensions} from 'react-native'
import React, {ReactNode} from 'react'
import Svg, {Path} from "react-native-svg";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

console.log('ScreenWidth', screenWidth);
console.log('ScreenHeight', screenHeight);

// Dimensioni originali dell'SVG (dal viewBox)
const originalWidth = 210;
const originalHeight = 297;



// Funzioni di scala corrette
const scaleX = (x:number) => x * screenWidth/originalWidth;
const scaleY = (y:number) => y * screenHeight/originalHeight;


const darkColor = "#0b1e30";
const mediumColor = "#0f2840";
const lightColor = "#133250";

// onde corner
const cornerLight = `
  M${scaleX(80)},${scaleY(298)}
  C${scaleX(118)},${scaleY(230)}
   ${scaleX(176)},${scaleY(241)}
   ${scaleX(211)},${scaleY(201)}
  C${scaleX(214)},${scaleY(244)}
   ${scaleX(211)},${scaleY(297)}
   ${scaleX(211)},${scaleY(297)}
  L${scaleX(originalWidth)},${scaleY(originalHeight)}
  Z
`;

const cornerMedium = `
  M${scaleX(103)},${scaleY(298)}
  C${scaleX(103 + 27)},${scaleY(298 - 51)}
   ${scaleX(103 + 37)},${scaleY(298 - 11)}
   ${scaleX(103 + 81)},${scaleY(298 - 53)}
  C${scaleX(103 + 81 + 11)},${scaleY(298 - 53 - 10)}
   ${scaleX(103 + 81 + 17)},${scaleY(298 - 53 - 17)}
   ${scaleX(103 + 81 + 27)},${scaleY(298 - 53 - 19)}
  L${scaleX(originalWidth)},${scaleY(originalHeight)}
  Z
`;

const cornerDark = ` 
  M${scaleX(144)},${scaleY(297)}
  C${scaleX(156)},${scaleY(291)}
   ${scaleX(171)},${scaleY(288)}
   ${scaleX(181)},${scaleY(280)}
  C${scaleX(192)},${scaleY(271)}
   ${scaleX(197)},${scaleY(255)}
   ${scaleX(211)},${scaleY(256)}
  L${scaleX(originalWidth)},${scaleY(originalHeight)}
  Z
`;

// onde upper
const upperLight = `
  M${scaleX(0)},${scaleY(0)}
  L${scaleX(originalWidth)},${scaleY(0)}
  L${scaleX(originalWidth)},${scaleY(142)}
  C${scaleX(originalWidth)},${scaleY(142)}
   ${scaleX(178)},${scaleY(128)}
   ${scaleX(133)},${scaleY(135)}
  C${scaleX(133)},${scaleY(135)}
   ${scaleX(56)},${scaleY(149)}
   ${scaleX(0)},${scaleY(131)}
  Z
`;

const upperMedium = `
  M${scaleX(0)},${scaleY(0)}
  L${scaleX(originalWidth)},${scaleY(0)}
  L${scaleX(originalWidth)},${scaleY(118)}
  C${scaleX(originalWidth)},${scaleY(108)}
   ${scaleX(142)},${scaleY(133)}
   ${scaleX(69)},${scaleY(118)}
  C${scaleX(69)},${scaleY(118)}
   ${scaleX(34)},${scaleY(110)}
   ${scaleX(0)},${scaleY(120)}
  L${scaleX(0)},${scaleY(0)}
`;

const upperDark = `
  M${scaleX(-2.1094097)},${scaleY(-2.1166667)}
  L${scaleX(213.04255)},${scaleY(-1.7911149)}
  L${scaleX(212.55878)},${scaleY(70.558093)}
  C${scaleX(120.44609)},${scaleY(64.30481)}
   ${scaleX(61.126936)},${scaleY(101.33014)}
   ${scaleX(-1.1418667)},${scaleY(112.95162)}
  C${scaleX(-2.2643987)},${scaleY(89.186323)}
   ${scaleX(-2.1094097)},${scaleY(-2.1166667)}
   ${scaleX(-2.1094097)},${scaleY(-2.1166667)}
`;


type BackgroundProps = {
  children: ReactNode; // Tipo corretto per i figli
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
      <SafeAreaView style={{ flex: 1, position: 'relative' }}>
          {/* I children sono posizionati sopra il background */}
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
              {children}
          </View>

          <Svg height={screenHeight} width={screenWidth}>
          <Path
          d={cornerLight}
          fill={lightColor}
          />
          <Path
          d={cornerMedium}
          fill={mediumColor}
          />
          <Path
          d={cornerDark}
          fill={darkColor}
          />
          <Path
          d={upperLight}
          fill={lightColor}
          />
          <Path
          d={upperMedium}
          fill={mediumColor}
          />
          <Path
          d={upperDark}
          fill={darkColor}
          />
      </Svg>
    </SafeAreaView>
  )
}

export default Background

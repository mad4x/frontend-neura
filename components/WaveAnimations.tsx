// WaveAnimations.tsx
import React from 'react';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated';
import { Path } from 'react-native-svg';

// Crea una versione animata di Path
const AnimatedPath = Animated.createAnimatedComponent(Path);

type WaveAnimationsProps = {
    screenWidth: number;
    screenHeight: number;
    originalWidth: number;
    originalHeight: number;
    colors: {
        lightColor: string;
        mediumColor: string;
        darkColor: string;
    };
};

export const WaveAnimations: React.FC<WaveAnimationsProps> = ({
                                                                  screenWidth,
                                                                  screenHeight,
                                                                  originalWidth,
                                                                  originalHeight,
                                                                  colors,
                                                              }) => {
    const { lightColor, mediumColor, darkColor } = colors;

    // Fattori di scala (numeri primitivi)
    const factorX = screenWidth / originalWidth;
    const factorY = screenHeight / originalHeight;

    // Valore condiviso per l'animazione
    const animation = useSharedValue(0);

    React.useEffect(() => {
        animation.value = withRepeat(
            withTiming(1, {
                duration: 10000,
                easing: Easing.linear,
            }),
            -1
        );
    }, []);

    // Onde superiori animate (già definite)
    const animatedPropsLight = useAnimatedProps(() => {
        const offset = Math.sin(animation.value * Math.PI * 2) * 5;
        const path = `
      M${0},${factorY * (offset + 10)}
      L${factorX * originalWidth},${factorY * (offset + 10)}
      L${factorX * originalWidth},${factorY * (142 + offset + 10)}
      C${factorX * originalWidth},${factorY * (142 + offset + 10)}
       ${factorX * 178},${factorY * (128 + offset + 10)}
       ${factorX * 133},${factorY * (135 + offset + 10)}
      C${factorX * 133},${factorY * (135 + offset + 10)}
       ${factorX * 56},${factorY * (149 + offset + 10)}
       ${0},${factorY * (131 + offset + 10)}
      Z
    `;
        return { d: path };
    });

    const animatedPropsMedium = useAnimatedProps(() => {
        const offset = Math.sin(animation.value * Math.PI * 2 + Math.PI / 2) * 10;
        const path = `
      M${0},${factorY * (offset)}
      L${factorX * originalWidth},${factorY * (offset)}
      L${factorX * originalWidth},${factorY * (118 + offset)}
      C${factorX * originalWidth},${factorY * (108 + offset)}
       ${factorX * 142},${factorY * (133 + offset)}
       ${factorX * 69},${factorY * (118 + offset)}
      C${factorX * 69},${factorY * (118 + offset)}
       ${factorX * 34},${factorY * (110 + offset)}
       ${0},${factorY * (120 + offset)}
      L${0},${factorY * (offset)}
    `;
        return { d: path };
    });

    const animatedPropsDark = useAnimatedProps(() => {
        const offset = Math.sin(animation.value * Math.PI * 2 + Math.PI) * 5;
        const path = `
      M${0},${factorY * (-20 + offset)}
      L${factorX * 213},${factorY * (-20 + offset)}
      L${factorX * 212},${factorY * (70 + offset)}
      C${factorX * 120},${factorY * (64 + offset)}
       ${factorX * 61},${factorY * (101 + offset)}
       ${0},${factorY * (112 + offset)}
      C${0},${factorY * (89 + offset)}
       ${0},${factorY * (offset)}
       ${0},${factorY * (offset)}
    `;
        return { d: path };
    });

    // Ora animiamo anche i corner usando le stesse coordinate di base,
    // aggiungendo un offset verticale animato (con diverse fasi)
    const animatedPropsCornerLight = useAnimatedProps(() => {
        const offset = Math.sin(animation.value * Math.PI * 2) * 5;
        const path = `
      M${80 * factorX},${(298 + offset) * factorY}
      C${118 * factorX},${(230 + offset) * factorY} ${176 * factorX},${(241 + offset) * factorY} ${211 * factorX},${(201 + offset) * factorY}
      C${214 * factorX},${(244 + offset) * factorY} ${211 * factorX},${(297 + offset) * factorY} ${211 * factorX},${(297 + offset) * factorY}
      L${originalWidth * factorX},${originalHeight * factorY}
      Z
    `;
        return { d: path };
    });

    const animatedPropsCornerMedium = useAnimatedProps(() => {
        const offset = Math.sin(animation.value * Math.PI * 2 + Math.PI / 4) * 5;
        const path = `
      M${103 * factorX},${(298 + offset) * factorY}
      C${(103 + 27) * factorX},${(298 - 51 + offset) * factorY} ${(103 + 37) * factorX},${(298 - 11 + offset) * factorY} ${(103 + 81) * factorX},${(298 - 53 + offset) * factorY}
      C${(103 + 81 + 11) * factorX},${(298 - 53 - 10 + offset) * factorY} ${(103 + 81 + 17) * factorX},${(298 - 53 - 17 + offset) * factorY} ${(103 + 81 + 27) * factorX},${(298 - 53 - 19 + offset) * factorY}
      L${originalWidth * factorX},${originalHeight * factorY}
      Z
    `;
        return { d: path };
    });

    const animatedPropsCornerDark = useAnimatedProps(() => {
        const offset = Math.sin(animation.value * Math.PI * 2 + Math.PI / 2) * 5;
        const path = `
      M${144 * factorX},${(297 + offset) * factorY}
      C${156 * factorX},${(291 + offset) * factorY} ${171 * factorX},${(288 + offset) * factorY} ${181 * factorX},${(280 + offset) * factorY}
      C${192 * factorX},${(271 + offset) * factorY} ${197 * factorX},${(255 + offset) * factorY} ${211 * factorX},${(256 + offset) * factorY}
      L${originalWidth * factorX},${originalHeight * factorY}
      Z
    `;
        return { d: path };
    });

    return (
        <>
            {/* Onde animate */}
            <AnimatedPath animatedProps={animatedPropsLight} fill={lightColor} />
            <AnimatedPath animatedProps={animatedPropsMedium} fill={mediumColor} />
            <AnimatedPath animatedProps={animatedPropsDark} fill={darkColor} />

            {/* Corner animati */}
            <AnimatedPath animatedProps={animatedPropsCornerLight} fill={lightColor} />
            <AnimatedPath animatedProps={animatedPropsCornerMedium} fill={mediumColor} />
            <AnimatedPath animatedProps={animatedPropsCornerDark} fill={darkColor} />
        </>
    );
};

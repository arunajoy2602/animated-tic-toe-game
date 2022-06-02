import React, { useState, useEffect } from 'react';
import { Animated, Easing, Image } from 'react-native';
import Lottie from 'lottie-react-native';

const Winner = () => {
    const [progressValue] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(progressValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
        }).start();
    }, []);

    return (
        <>
            {
                Platform.OS === 'ios' ?
                    <Image
                        resizeMode='contain'
                        source={require('../../assets/trivia-cup.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    :
                    <Lottie
                        autoPlay
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        source={require('../../assets/winner.json')}
                        progress={progressValue}
                    />
            }
        </>
    )
}


export default Winner;

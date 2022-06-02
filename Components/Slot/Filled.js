import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { ANIMATION_DURATION } from '../../Screens/Game';

const Filled = ({ filled, start }) => {
    const [opacityValue] = useState(new Animated.Value(0));
    const [scaleValue] = useState(new Animated.Value(.8));

    useEffect(() => {
        start && Animated.timing(
            opacityValue,
            {
                toValue: 1,
                duration: ANIMATION_DURATION,
                easing: Easing.linear(),
            }
        ).start();
    }, [start]);

    useEffect(() => {
        filled && Animated.parallel([
            Animated.timing(
                opacityValue,
                {
                    toValue: 1,
                    duration: ANIMATION_DURATION,
                    easing: Easing.linear(),
                }
            ),
            Animated.spring(
                scaleValue,
                {
                    toValue: 1,
                    easing: Easing.cubic(),
                },
            ),

        ]).start();
    }, [filled]);

    return (
        <Animated.View
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: filled === 1 ? 'blue' : 'green',
                opacity: opacityValue,
                transform: [
                    {
                        scale: scaleValue,
                    }
                ],
            }}
        />
    );
}
export default Filled;
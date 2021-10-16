import React, { useEffect, useRef } from 'react';
import { useCallback } from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';
import * as styles from './styles/gtoast';

const FADE_IN = 1;
const FADE_OUT = 0;
const FADE_IN_DURATION = 500;
const FADE_OUT_DURATION = 1400;

type Props = {
    onRemove: (randId: string) => void;
    randId: string;
    id: string | null;
    text: string;
    duration: number;
};

const Toast = ({ onRemove, randId, text, duration }: Props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const isRemoving = useRef(false);

    const animateToast = useCallback(
        (value, callback = null) => {
            Animated.timing(fadeAnim, {
                toValue: value,
                duration:
                    value === FADE_IN ? FADE_IN_DURATION : FADE_OUT_DURATION,
                useNativeDriver: true,
            }).start(() => {
                if (typeof callback === 'function') {
                    callback();
                }
            });
        },
        [fadeAnim]
    );

    const fadeIn = useCallback(() => {
        animateToast(FADE_IN);
    }, [animateToast]);

    const fadeOut = useCallback(() => {
        if (isRemoving.current) {
            return;
        }

        isRemoving.current = true;

        animateToast(FADE_OUT, () => {
            onRemove(randId);
        });
    }, [animateToast, randId, onRemove]);

    const handleToastPress = useCallback(() => {
        fadeOut();
    }, [fadeOut]);

    useEffect(() => {
        fadeIn();

        setTimeout(() => {
            fadeOut();
        }, duration + FADE_IN_DURATION + FADE_OUT_DURATION);
    }, [duration, fadeIn, fadeOut]);

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.toast.container}
                onPress={handleToastPress}>
                <Text style={styles.toast.text}>{text}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default Toast;

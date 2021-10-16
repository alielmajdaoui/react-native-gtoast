import React, {
    useEffect,
    useState,
    useCallback,
    useMemo,
    useReducer,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { View, Dimensions, Keyboard } from 'react-native';
import { nanoid } from 'nanoid/non-secure';
import { reducer, initialState } from './reducer';
import { addToast, removeToast } from './actions';
import Toast from './Toast';
import * as styles from './styles/gtoast';
import type { GToastProps, ToastOptions } from './types';

const window = Dimensions.get('window');

export const GToast: React.FunctionComponent<GToastProps> = forwardRef(
    ({ paddingBottom }, ref) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const [dimensions, setDimensions] = useState({
            width: window.width,
            height: window.height,
            keyboardHeight: 0,
        });

        const overlayDimensions = useMemo(() => {
            const width = dimensions.width - 15 * 2;
            const x = dimensions.width / 2 - width / 2;
            const y = (paddingBottom || 0) + dimensions.keyboardHeight;

            return {
                width,
                x,
                y,
            };
        }, [dimensions.keyboardHeight, dimensions.width, paddingBottom]);

        const handleDimensionsChange = useCallback((newDimensions) => {
            setDimensions((prevDimensions) => ({
                ...prevDimensions,
                width: newDimensions.window.width,
                height: window.height - newDimensions.window.height,
            }));
        }, []);

        const handleKeyboardWillShow = useCallback((e) => {
            setDimensions((prevDimensions) => ({
                ...prevDimensions,
                keyboardHeight: e.endCoordinates.height,
            }));
        }, []);

        const handleKeyboardDidHide = useCallback(() => {
            setDimensions((prevDimensions) => ({
                ...prevDimensions,
                keyboardHeight: 0,
            }));
        }, []);

        const handleRemoveToast = useCallback((randId: string) => {
            dispatch(removeToast(randId));
        }, []);

        const handleShowToast = useCallback(
            (text: string, options?: ToastOptions) => {
                dispatch(
                    addToast(nanoid(), text, options?.id, options?.duration)
                );
            },
            []
        );

        useImperativeHandle(
            ref,
            () => {
                return {
                    showToast: handleShowToast,
                };
            },
            [handleShowToast]
        );

        useEffect(() => {
            Dimensions.addEventListener('change', handleDimensionsChange);

            return () => {
                Dimensions.removeEventListener(
                    'change',
                    handleDimensionsChange
                );
            };
        }, [handleDimensionsChange]);

        useEffect(() => {
            Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow);
            Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

            return () => {
                Keyboard.removeListener(
                    'keyboardWillShow',
                    handleKeyboardWillShow
                );
                Keyboard.removeListener(
                    'keyboardDidHide',
                    handleKeyboardDidHide
                );
            };
        }, [handleKeyboardWillShow, handleKeyboardDidHide]);

        return (
            <View
                pointerEvents={'box-none'}
                style={[
                    styles.overlay.container,
                    {
                        left: overlayDimensions.x,
                        bottom: overlayDimensions.y,
                        width: overlayDimensions.width,
                    },
                ]}>
                {state.toasts.allRandIds
                    .slice(0)
                    .reverse()
                    .map((id) => {
                        const toast = state.toasts.byRandId[id];

                        return (
                            <Toast
                                key={toast.randId}
                                randId={toast.randId}
                                text={toast.text}
                                duration={toast.duration}
                                onRemove={handleRemoveToast}
                            />
                        );
                    })}
            </View>
        );
    }
);

GToast.defaultProps = {
    paddingBottom: 25,
};

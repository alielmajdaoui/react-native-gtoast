import React from 'react';
import { GToast } from './GToast';
import type {
    ToastOptions,
    GToastContainerProps,
    GToastContainerRef,
} from './types';

const GToastContainer: React.FunctionComponent<GToastContainerProps> &
    GToastContainerRef = (props): JSX.Element => {
    return <GToast {...props} ref={(ref) => (GToastContainer.ref = ref)} />;
};

GToastContainer.ref = null;

const showToast = (text: string, options?: ToastOptions) => {
    GToastContainer.ref?.showToast(text, {
        id: options?.id,
        duration: options?.duration,
    });
};

export { GToastContainer, showToast };

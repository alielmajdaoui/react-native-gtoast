import type { ADD_TOAST_ACTION, REMOVE_TOAST_ACTION } from './types';

export const addToast = (
    randId: string,
    text: string,
    id?: string,
    duration?: number
): ADD_TOAST_ACTION => ({
    type: 'ADD_TOAST',
    toast: {
        randId,
        text,
        id,
        duration,
    },
});

export const removeToast = (randId: string): REMOVE_TOAST_ACTION => ({
    type: 'REMOVE_TOAST',
    randId,
});

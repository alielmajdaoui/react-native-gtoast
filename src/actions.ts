import type { ADD_TOAST_ACTION, REMOVE_TOAST_ACTION } from './types';

export const addToast = (
    randId: string,
    id: string | null,
    text: string,
    duration: number
): ADD_TOAST_ACTION => ({
    type: 'ADD_TOAST',
    toast: {
        randId,
        id,
        text,
        duration,
    },
});

export const removeToast = (randId: string): REMOVE_TOAST_ACTION => ({
    type: 'REMOVE_TOAST',
    randId,
});

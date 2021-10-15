import type { Toast, ToastState, ACTIONS } from './types';

export const initialState: ToastState = {
    toasts: {
        byRandId: {},
        allRandIds: [],
    },
};

const addToast = (state: ToastState, toast: Toast): ToastState => {
    if (toast.id) {
        const exists = state.toasts.allRandIds.find((randId) => {
            const _toast = state.toasts.byRandId[randId];

            return _toast && _toast.id && _toast.id === toast.id;
        });

        if (exists) {
            return state;
        }
    }

    return {
        ...state,
        toasts: {
            ...state.toasts,
            byRandId: {
                ...state.toasts.byRandId,
                [toast.randId]: { ...toast },
            },
            allRandIds: [...state.toasts.allRandIds, toast.randId],
        },
    };
};

const removeToast = (state: ToastState, randId: string): ToastState => {
    const allRandIds = [...state.toasts.allRandIds];
    const index = allRandIds.findIndex((id) => id === randId);

    if (index > -1) {
        allRandIds.splice(index, 1);

        return {
            ...state,
            toasts: { ...state.toasts, allRandIds },
        };
    }

    return state;
};

export const reducer = (state: ToastState, action: ACTIONS): ToastState => {
    switch (action.type) {
        case 'ADD_TOAST':
            return addToast(state, action.toast);

        case 'REMOVE_TOAST':
            return removeToast(state, action.randId);
    }

    return state;
};

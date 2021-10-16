export type Toast = {
    randId: string;
    text: string;
    id?: string;
    duration?: number;
};

export type ToastOptions = {
    id?: string;
    duration?: number;
};

export type ShowToast = (text: string, options?: ToastOptions) => void;

export type ExternalMethods = {
    showToast: ShowToast;
};

export type CommonProps = {
    paddingBottom?: number;
};

export type GToastProps = CommonProps & {
    ref: React.Ref<ExternalMethods> | null;
};

export type GToastContainerProps = CommonProps;

export type GToastContainerRef = {
    ref: ExternalMethods | null;
};

export type ToastState = {
    toasts: {
        byRandId: { [randId: string]: Toast };
        allRandIds: string[];
    };
};

export type ADD_TOAST_ACTION = { type: 'ADD_TOAST'; toast: Toast };

export type REMOVE_TOAST_ACTION = { type: 'REMOVE_TOAST'; randId: string };

export type ACTIONS = ADD_TOAST_ACTION | REMOVE_TOAST_ACTION;

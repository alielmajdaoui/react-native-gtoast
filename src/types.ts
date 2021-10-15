export type Toast = {
    randId: string;
    id: string | null;
    text: string;
    duration: number;
};

export type ToastOptions = {
    id: string | null;
    duration: number | null;
};

export type ShowToastPayload = {
    text: string;
    id: string | null;
    duration: number;
};

export type ShowToast = (data: ShowToastPayload) => void;

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

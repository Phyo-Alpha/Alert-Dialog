// Licensed Under Edward's Distribution License

import { ComponentProps, ReactNode, useContext, useEffect } from "react";
import React from "react";
import { DialogProps } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { ApiError } from "../type";
import AlertDialog from "../components/alert-dialog";
import useLocation from "./use-location";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AlertDialogType = {
    SUCCESS_ALERT: 'SUCCESS_ALERT',
    ERROR_ALERT: 'ERROR_ALERT',
    INFO_ALERT: 'INFO_ALERT',
    GUARD_ALERT: 'GUARD_ALERT',
} as const;

type AlertDialogTypeKeys = keyof typeof AlertDialogType;

type AlertActionType = {
    name: string
} & ({
    type: 'link'
    props: { href?: string, className?: string }
} | {
    type: 'button'
    props: ComponentProps<typeof Button>
})

export type AlertDialogProps = DialogProps & {
    icon?: ReactNode;
    actions?: AlertActionType[];
    modelType?: AlertDialogTypeKeys;
    title?: string;
    description?: string;
    ApiError?: ApiError;
}

type AlertState = {
    alert: AlertDialogProps;
}

type ActionType = {
    SHOW_ALERT: 'SHOW_ALERT',
    HIDE_ALERT: 'HIDE_ALERT',
};

type Action =
    | { type: ActionType['SHOW_ALERT'], alert: AlertDialogProps }
    | { type: ActionType['HIDE_ALERT'] };

function reducer(state: AlertState, action: Action): AlertState {
    switch (action.type) {
        case 'SHOW_ALERT':
            return { alert: { ...action.alert, open: true } };
        case 'HIDE_ALERT':
            return { alert: { ...state.alert, open: false } };
        default:
            return state;
    }
}

const AlertContext = React.createContext<{
    state: AlertState;
    dispatch: React.Dispatch<Action>;
}>({
    state: { alert: { open: false } },
    dispatch: () => null,
});

export const useAlert = () => {
    const { state, dispatch } = useContext(AlertContext);

    const success = (props: Omit<AlertDialogProps, 'modelType'>) => {
        dispatch({ type: 'SHOW_ALERT', alert: { ...props, modelType: 'SUCCESS_ALERT' } });
    }

    const error = (props: Omit<AlertDialogProps, 'modelType'>) => {
        dispatch({ type: 'SHOW_ALERT', alert: { ...props, modelType: 'ERROR_ALERT' } });
    }

    const guard = (props: Omit<AlertDialogProps, 'modelType'>) => {
        dispatch({ type: 'SHOW_ALERT', alert: { ...props, modelType: 'GUARD_ALERT' } });
    }

    const info = (props: Omit<AlertDialogProps, 'modelType'>) => {
        dispatch({ type: 'SHOW_ALERT', alert: { ...props, modelType: 'INFO_ALERT' } });
    }

    const dismiss = () => {
        dispatch({ type: 'HIDE_ALERT' });
    }

    return {
        alert: {
            ...state.alert,
            success,
            error,
            guard,
            info,
            dismiss
        }
    };
};

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(reducer, { alert: { open: false } });
    const location = useLocation();

    // Close dialog on route change
    useEffect(() => {
        dispatch({ type: 'HIDE_ALERT' });
    }, [location.pathname]);

    return (
        <AlertContext.Provider value={{ state, dispatch }}>
            <AlertDialog />
            {children}
        </AlertContext.Provider>
    );
};
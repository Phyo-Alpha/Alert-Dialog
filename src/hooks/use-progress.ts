// Licensed under Edward's Distribution 

import React from "react";

export interface ProgressProps {
    finish: () => void;
    duration?: number;
}

interface State {
    status: 'idle' | 'active' | 'success' | 'error';
    progress: number;
    duration: number;
}

const initialState: State = {
    status: 'idle',
    progress: 0,
    duration: 1000
};

export function useProgress({ finish, duration }: ProgressProps) {
    const [state, setState] = React.useState<State>({
        ...initialState,
        duration: duration || initialState.duration
    });

    const start = React.useCallback(() => {
        setState(prev => ({ ...prev, status: 'active' }));
    }, []); 

    const reset = React.useCallback(() => {
        setState(initialState);
    }, []);

    React.useEffect(() => {
        if (state.status === 'active') {
            const interval = setInterval(() => {
                setState((prev) => {
                    if (prev.progress >= 100) {
                        finish();
                        return { ...prev, progress: 100, status: 'success' };
                    }
                    return { ...prev, progress: prev.progress + 10, status: 'active' };
                });
            }, state.duration);
            return () => clearInterval(interval);
        }
    }, [state.status, state.progress, finish, state.duration]);

    return {
        progress: state.progress,
        status: state.status,
        start,
        reset
    };
}
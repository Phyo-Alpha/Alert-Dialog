import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { TriangleAlert, Info } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/use-progress";
import { AlertActionType, useAlert } from "@/hooks/use-alert";

const AlertDialog = () => {
    const { alert } = useAlert();
    const { modelType, ...props } = alert;

    const { progress, start, reset } = useProgress({
        finish: () => alert.dismiss(),
        duration: 1000,
    });

    useEffect(() => {
        if (alert.open) {
            start()
        } else {
            reset()
        }
    }, [alert.open, start, reset]);

    const progressBarColor = modelType ? {
        'SUCCESS_ALERT': 'bg-success',
        'ERROR_ALERT': 'bg-destructive',
        'GUARD_ALERT': 'bg-destructive',
        'INFO_ALERT': 'bg-info'
    }[modelType] : 'bg-success';

    return (
        <Dialog {...props}>
            <DialogContent className="w-full max-w-[600px] p-0 pb-6" close={() => alert.dismiss()}>
                <div className="flex flex-col items-center gap-6 relative">
                    <div className="w-full h-1 bg-background">
                        <div
                            className={cn("h-full transition-all duration-1000 ease-linear", progressBarColor)}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    {modelType === 'SUCCESS_ALERT' && <SuccessAlert />}
                    {modelType === 'ERROR_ALERT' && <ErrorAlert />}
                    {modelType === 'GUARD_ALERT' && <GuardAlert />}
                    {modelType === 'INFO_ALERT' && <InfoAlert />}
                </div>
            </DialogContent>
        </Dialog>
    );
};

const renderActions = (actions: AlertActionType[]) => (
    <div className="flex flex-col gap-2">
        {actions?.map((action, i) => action.type === 'link' ? (
            <a key={i} {...action.props} className="text-center text-sm text-accent">
                {action.name}
            </a>
        ) : (
            <Button key={i} size="lg" {...action.props}>
                {action.name}
            </Button>
        ))}
    </div>
);

const SuccessAlert = () => {
    const { alert } = useAlert();
    if (alert.modelType !== 'SUCCESS_ALERT') return null;

    const { title, description, icon, actions } = alert;

    return (
        <>
            {icon}
            <DialogTitle className="font-bold text-2xl uppercase">{title}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">{description}</DialogDescription>
            {actions && renderActions(actions)}
        </>
    );
};

const ErrorAlert = () => {
    const { alert } = useAlert();
    if (alert.modelType !== 'ERROR_ALERT') return null;

    const { ApiError: error, icon, actions } = alert;

    return (
        <>
            {icon ?? <TriangleAlert className="text-destructive size-20" />}
            <DialogTitle className="font-bold text-2xl uppercase text-destructive">
                {error?.status ?? 'ERROR!'}
            </DialogTitle>
            <DialogDescription className="text-sm">
                {error?.data.message ?? 'INTERNAL SERVER ERROR!'}
            </DialogDescription>
            {actions && renderActions(actions)}
        </>
    );
};

const GuardAlert = () => {
    const { alert } = useAlert();
    if (alert.modelType !== 'GUARD_ALERT') return null;

    const { title, description, icon, actions } = alert;

    return (
        <>
            {icon ?? <TriangleAlert className="text-destructive size-20" />}
            <DialogTitle className="font-bold text-2xl uppercase text-destructive">
                {title ?? 'WARNING!'}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
                {description ?? 'The following action is dangerous. Are you sure?'}
            </DialogDescription>
            {actions && renderActions(actions)}
        </>
    );
};

const InfoAlert = () => {
    const { alert } = useAlert();
    if (alert.modelType !== 'INFO_ALERT') return null;

    const { title, description, icon, actions } = alert;

    return (
        <>
            {icon ?? <Info className="text-info size-20" />}
            <DialogTitle className="font-bold text-2xl uppercase text-info">
                {title ?? 'INFORMATION'}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
                {description ?? 'Additional information about this action'}
            </DialogDescription>
            {actions && renderActions(actions)}
        </>
    );
};

export default AlertDialog;
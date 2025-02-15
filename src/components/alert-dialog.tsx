import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/use-progress";
import { useAlert } from "@/hooks/use-alert";

const AlertDialog = () => {
    const { alert } = useAlert();
    const { modelType, ...props } = alert;

    const { progress, start, reset } = useProgress({
        finish: () => alert.dismiss(),
        duration: 1000,
    });

    // Start/reset progress when alert.open changes
    useEffect(() => {
        if (alert.open) {
            start();
        } else {
            reset();
        }
    }, [alert.open, start, reset]);

    const progressBarColor = modelType === 'SUCCESS_ALERT' ? 'bg-success' :
        modelType === 'ERROR_ALERT' ? 'bg-destructive' :
            modelType === 'GUARD_ALERT' ? 'bg-destructive' : 'bg-success';

    return (
        <Dialog {...props}>
            <DialogContent className="w-full max-w-[600px] p-0 pb-6" close={() => alert.dismiss()}>
                <div className="flex flex-col items-center gap-6 relative">
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-background">
                        <div
                            className={cn("h-full transition-all duration-1000 ease-linear", progressBarColor)}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    {modelType === 'SUCCESS_ALERT' && <SuccessAlert />}
                    {modelType === 'ERROR_ALERT' && <ErrorAlert />}
                    {modelType === 'GUARD_ALERT' && <GuardAlert />}
                </div>
            </DialogContent>
        </Dialog>
    );
};

function SuccessAlert() {
    const { alert } = useAlert();
    const { modelType } = alert


    if (modelType !== 'SUCCESS_ALERT') return null

    const { title, description, icon, actions } = alert

    return (
        <>
            {icon}
            <DialogTitle className="font-bold text-2xl uppercase">{title}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">{description}</DialogDescription>
            <div className="flex flex-col gap-2">
                {actions?.map((action, i) => {
                    if (action.type === 'link') {
                        return (
                            <a key={i} {...action.props} className="text-center text-sm text-accent">
                                {action.name}
                            </a>
                        )
                    }
                    return (
                        <Button key={i} size="lg" {...action.props}>
                            {action.name}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

function ErrorAlert() {
    const { alert } = useAlert()

    const { modelType } = alert

    if (modelType !== 'ERROR_ALERT') return null

    const { ApiError: error, icon, actions } = alert

    return (
        <>
            {icon ?? <TriangleAlert className="text-destructive size-20" />}
            <DialogTitle className="font-bold text-2xl uppercase text-destructive">{error?.status ?? 'ERROR!'}</DialogTitle>
            <DialogDescription className="text-sm">{error?.data.message ?? 'INTERNAL SERVER ERROR!'}</DialogDescription>
            <div className="flex flex-col">
                {actions?.map((action, i) => {
                    if (action.type === 'link') {
                        return (
                            <a key={i} {...action.props}>
                                {action.name}
                            </a>
                        )
                    }
                    return (
                        <Button key={i}  {...action.props}>
                            {action.name}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

function GuardAlert() {
    const { alert } = useAlert()

    const { modelType } = alert

    if (modelType !== 'GUARD_ALERT') return null

    const { title, description, icon, actions } = alert
    return (
        <>
            {icon ?? <TriangleAlert className="text-destructive size-20" />}
            <DialogTitle className="font-bold text-2xl uppercase text-destructive">{title ?? 'WARNING!'}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">{description ?? 'The following action is dangerous. Are you sure?'}</DialogDescription>
            <div className="flex flex-col">
                {actions?.map((action, i) => {
                    if (action.type === 'link') {
                        return (
                            <a key={i} {...action.props}>
                                {action.name}
                            </a>
                        )
                    }
                    return (
                        <Button key={i} {...action.props} variant="destructive">
                            {action.name}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default AlertDialog;
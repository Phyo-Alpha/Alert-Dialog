import { Button } from "@/components/ui/button"
import { AlertDialogProps, useAlert } from "@/hooks/use-alert"

export default function InfoAlert() {
    const { alert } = useAlert()

    const infoAlert: AlertDialogProps = {
        title: 'Alert',
        description: 'This is an info alert',
        actions: [{
            name: 'OK',
            type: 'button',
            props: { onClick: () => alert.dismiss() }
        }]
    }

    function showGuardAlert() {
        alert.info(infoAlert)
    }

    return (
        <Button variant="default" className="bg-info" onClick={showGuardAlert}>
            Info
        </Button>
    )
}
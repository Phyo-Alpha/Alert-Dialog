import { Button } from "@/components/ui/button"
import { AlertDialogProps, useAlert } from "@/hooks/use-alert"

export default function GuardAlert() {
    const { alert } = useAlert()

    const guardAlert: AlertDialogProps = {
        title: 'Confirm',
        description: 'Are you sure? This cannot be undone',
        actions: [{
            name: 'Delete',
            type: 'button',
            props: { variant: 'destructive' }
        }]
    }

    function showGuardAlert() {
        alert.guard(guardAlert)
    }

    return (
        <Button variant="default" onClick={showGuardAlert}>
            Guard
        </Button>
    )
}
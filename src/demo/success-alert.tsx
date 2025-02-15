import { Button } from "@/components/ui/button";
import { AlertDialogProps, useAlert } from "@/hooks/use-alert";
import { CheckCircle } from "lucide-react";

export default function SuccessAlertDemo() {

    const { alert } = useAlert()

    const successAlert: AlertDialogProps = {
        title: 'Success',
        description: 'This is a success alert',
        icon: <CheckCircle />,
    }

    function showSuccessAlert() {
        alert.success(successAlert)
    }

    return (
        <Button onClick={showSuccessAlert}>
            Success
        </Button>
    )
}
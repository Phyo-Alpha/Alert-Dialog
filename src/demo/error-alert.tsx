import { Button } from "@/components/ui/button"
import { AlertDialogProps, useAlert } from "@/hooks/use-alert"

export default function ErrorAlert() {

    const { alert } = useAlert()

    const errorAlert: AlertDialogProps = {
        title: 'Error',
        description: 'Failed to process request',
        ApiError: {
            status: 500,
            data: {
                message: 'Internal server error',
                statusCode: 500
            }
        }
    }

    function showErrorAlert() {
        alert.error(errorAlert)
    }

    return (
        <Button variant="destructive" onClick={showErrorAlert}>
            Error
        </Button>
    )
}
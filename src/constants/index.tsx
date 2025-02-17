import ErrorAlert from "@/demo/error-alert";
import GuardAlert from "@/demo/guard-alert";
import InfoAlert from "@/demo/info-alert";
import SuccessAlertDemo from "@/demo/success-alert";

export const demoItems = [
  {
    id: 'success',
    title: 'Success Alerts',
    description: 'Positive feedback and confirmations',
    demoComponent: <SuccessAlertDemo />,
    codeSnippet: `alert.success({
    title: 'Success',
    description: 'Operation completed successfully',
    icon: <CheckCircle />,
  })`,
    titleClassName: 'text-success',
  },
  {
    id: 'error',
    title: 'Error Alerts',
    description: 'Error notifications and exceptions',
    demoComponent: <ErrorAlert />,
    codeSnippet: `alert.error({
    title: 'Error',
    description: 'Failed to process request',
    ApiError: {
      status: 500,
      data: {
        message: 'Internal server error',
        statusCode: 500
      }
    }
  })`,
    titleClassName: 'text-destructive',
  },
  {
    id: 'guard',
    title: 'Guard Alerts',
    description: 'Destructive action confirmations',
    demoComponent: <GuardAlert />,
    codeSnippet: `alert.guard({
    title: 'Confirm',
    description: 'Are you sure? This cannot be undone',
    actions: [{
      name: 'Delete',
      type: 'button',
      props: { variant: 'destructive' }
    }]
  })`,
    titleClassName: 'text-destructive',
  },
  {
    id: 'info',
    title: 'Info Alerts',
    description: 'For general information and notices',
    demoComponent: <InfoAlert />,
    codeSnippet: `alert.info({
        title: 'Alert',
        description: 'This is an info alert',
        actions: [{
            name: 'OK',
            type: 'button',
            props: { onClick: () => alert.dismiss() }
        }]
    })`,
    titleClassName: 'text-info',
  },
];
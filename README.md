# Alert Dialog Library

A lightweight, customizable, and accessible alert dialog library built with **React**, **Shadcn UI**, and **Tailwind CSS**. It supports multiple alert types (success, error, info, guard) with progress indicators and customizable actions.

Source code: [GitHub](https://github.com/Phyo-Alpha/Alert-Dialog)

---

## Features

- 🚀 **Multiple Alert Types**: Success, Error, Info, and Guard alerts.
- ⏳ **Auto-dismiss with Progress Bar**: Visual feedback for auto-dismissing alerts.
- 🎨 **Customizable Actions**: Add buttons or links with custom behavior.
- 📱 **Responsive Design**: Works seamlessly across all screen sizes.
- 🛠 **TypeScript Support**: Fully typed for better developer experience.

---

## Installation

1. Install the library:

   ```bash
   npm install @phyo-alpha/alert-dialog
   ```
2. Import the `AlertProvider` component in your app:

   ```code
   import { AlertProvider } from "@your-library/alerts";

    function App() {
        return (
            <AlertProvider>
            {/* Your app content */}
            </AlertProvider>
        );
    }
   ```

---

## Usage

### Basic Example

```code
import { useAlert } from "@your-library/alerts";

function Example() {
  const { alert } = useAlert();

  const showSuccessAlert = () => {
    alert.success({
      title: "Success!",
      description: "Your action was completed successfully.",
      icon: <CheckCircle />,
    });
  };

  return (
    <button onClick={showSuccessAlert}>
      Show Success Alert
    </button>
  );
}
```

---

## ALERT TYPES

### Success Alert

```code
alert.success({
  title: "Success!",
  description: "Your action was completed successfully.",
  icon: <CheckCircle />,
  actions: [
    {
      name: "Close",
      type: "button",
      props: { onClick: () => console.log("Closed") },
    },
  ],
});
```

### Error Alert

```code
alert.error({
  title: "Error!",
  description: "Something went wrong. Please try again.",
  icon: <TriangleAlert />,
  ApiError: {
    status: "500",
    data: { message: "Internal Server Error" },
  },
});
```

### Info Alert

```code
alert.info({
  title: "Info",
  description: "This is an informational message.",
  icon: <Info />,
});
```

### Guard Alert

```code
alert.guard({
  title: "Warning!",
  description: "This action cannot be undone. Are you sure?",
  icon: <AlertCircle />,
  actions: [
    {
      name: "Delete",
      type: "button",
      props: { variant: "destructive", onClick: () => console.log("Deleted") },
    },
  ],
});
```

---

## PROPS

### Alert Dialog Props

| Prop            | Type                | Description                                                              |
| --------------- | ------------------- | ------------------------------------------------------------------------ |
| `title`       | string              | The title of the alert.                                                  |
| `description` | string              | The description of the alert.                                            |
| `icon`        | ReactNode           | An optional icon to display in the alert.                                |
| `actions`     | Action[]            | An array of actions (buttons or links) to display in the alert.          |
| modelType       | AlertDialogTypeKeys | The type of alert (SUCCESS_ALERT, ERROR_ALERT, INFO_ALERT, GUARD_ALERT). |
| ApiError        | ApiError            | An optional object containing the API error details (status, data).      |

### Alert Action Props

| Prop      | Type   | Description                                                       |
| --------- | ------ | ----------------------------------------------------------------- |
| `name`  | string | The name of the action.                                           |
| `type`  | string | The type of action (button, link).                                |
| `props` | object | Props for the action (e.g., href for links, onClick for buttons). |

---

## Customization

You can customize the alert dialog by overriding the default Tailwind CSS variables in your globals.css:

```code
:root {
  --color-success: hsl(112, 86%, 40%);
  --color-destructive: hsl(0, 100%, 50%);
  --color-pending: hsl(45.6, 100%, 52%);
  --radius: 0.6rem;
}
```

## Progress Bar

The progress bar color is automatically set based on the alert type:

- Success: `bg-success`
- Error: `bg-destructive`
- Info: `bg-pending`
- Guard: `bg-destructive`

---

## API Reference

`useAlert()`

Returns an object with the following methods:

| Method        | Description                              |
| ------------- | ---------------------------------------- |
| `success()` | Displays a success alert.                |
| `error()`   | Displays an error alert.                 |
| `info()`    | Displays an info alert.                  |
| `guard()`   | Displays a guard alert.                  |
| `dismiss()` | Dismisses the currently displayed alert. |

---

## License

Licensed  under the MIT License. See [LICENSE](LICENSE) for more information.

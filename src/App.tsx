import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code";
import { H1, P } from "@/components/ui/typography";
import SuccessAlertDemo from "./demo/success-alert";
import ErrorAlertDemo from "./demo/error-alert";
import GuardAlertDemo from "./demo/guard-alert";

function App() {
  return (
    <div className="demo-container">
      <header className="demo-header">
        <H1 className="mb-4">Alert Dialog Library</H1>
        <P className="text-muted-foreground max-w-2xl mx-auto">
          A collection of beautifully crafted, accessible alert components with progress indicators
          and customizable actions. Built with Shadcn UI and Tailwind CSS.
        </P>
      </header>

      <section className="feature-grid">
        <Card className="component-card">
          <CardHeader>
            <CardTitle>🚀 Features</CardTitle>
            <CardDescription>Core capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li>• Pre-styled alert variants</li>
              <li>• Auto-dismiss functionality</li>
              <li>• Progress indicators</li>
              <li>• Customizable actions</li>
              <li>• Responsive design</li>
              <li>• TypeScript support</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardHeader>
            <CardTitle>📦 Installation</CardTitle>
            <CardDescription>Get started quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock className="code-block">
              npm install @your-library/alerts
            </CodeBlock>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardHeader>
            <CardTitle>🎨 Theming</CardTitle>
            <CardDescription>Customizable styles</CardDescription>
          </CardHeader>
          <CardContent>
            <P className="text-sm">
              Fully themeable using CSS variables and Tailwind's
              built-in customization features.
            </P>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-12">
        <Card className="component-card">
          <CardHeader>
            <CardTitle className="text-success">Success Alerts</CardTitle>
            <CardDescription>Positive feedback and confirmations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="preview-section">
              <SuccessAlertDemo />
              <CodeBlock className="code-block">
                {`alert.success({
  title: 'Success',
  description: 'Operation completed successfully',
  icon: <CheckCircle />,
})`}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardHeader>
            <CardTitle className="text-destructive">Error Alerts</CardTitle>
            <CardDescription>Error notifications and exceptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="preview-section">
              <ErrorAlertDemo />
              <CodeBlock className="code-block">
                {`alert.error({
    title: 'Error',
    description: 'Failed to process request',
    ApiError: {
        status: 500,
        data: {
            message: 'Internal server error',
            statusCode: 500
        }
    }
})`}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardHeader>
            <CardTitle className="text-pending">Guard Alerts</CardTitle>
            <CardDescription>Destructive action confirmations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="preview-section">
              <GuardAlertDemo />
              <CodeBlock className="code-block">
                {`alert.guard({
  title: 'Confirm',
  description: 'Are you sure? This cannot be undone',
  actions: [{
    name: 'Delete',
    type: 'button',
    props: { variant: 'destructive' }
  }]
})`}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default App;
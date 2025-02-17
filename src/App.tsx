import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code";
import { H1, P } from "@/components/ui/typography";
import Github from "./components/github";
import { demoItems } from "./constants";
import DemoCard from "./components/demo-card";

function App() {
  return (
    <main>
      <Github />
      <nav className="demo-container">
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
            <CardContent className="px-2">
              <CodeBlock className="code-block w-80">
                npm install @phyo-alpha/alert-dialog
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
          {demoItems.map((item) => (
            <DemoCard
              {...item}
            />
          ))}
        </section>
      </nav>
    </main>
  );
}

export default App;
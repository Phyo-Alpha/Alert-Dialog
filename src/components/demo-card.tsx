import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { CodeBlock } from './ui/code';

interface DemoCardProps {
    title: string;
    description: string;
    demoComponent: React.ReactNode;
    codeSnippet: string;
    titleClassName?: string;
}
const DemoCard = ({ title, description, demoComponent, codeSnippet, titleClassName }: DemoCardProps) => {
    return (
        <Card className="component-card">
            <CardHeader>
                <CardTitle className={titleClassName}>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="preview-section">
                    {demoComponent}
                    <CodeBlock className="code-block">
                        {codeSnippet}
                    </CodeBlock>
                </div>
            </CardContent>
        </Card>
    );
};

export default DemoCard;
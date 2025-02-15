import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CodeProps {
    children: ReactNode;
    className?: string;
}

export function Code({ children, className }: CodeProps) {
    return (
        <code
            className={cn(
                "inline-block rounded-md bg-foreground/5 px-2 py-1 font-mono text-sm text-background/80",
                className
            )}
        >
            {children}
        </code>
    );
}

export function CodeBlock({ children, className }: CodeProps) {
    return (
        <pre
            className={cn(
                "w-full overflow-x-auto rounded-lg bg-foreground/5 p-4 font-mono text-sm text-background/80",
                className
            )}
        >
            <code>{children}</code>
        </pre>
    );
}
import React from "react";

const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
            {...props}
        />
    )
)

const P = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
            {...props}
        />
    )
)

export { H1, P }
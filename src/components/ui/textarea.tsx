import { cn } from "@/lib/utils";
import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-sky-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-sky-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-sky-800 dark:placeholder:text-sky-400 dark:focus-visible:ring-sky-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

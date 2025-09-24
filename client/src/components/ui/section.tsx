import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full", {
  variants: {
    background: {
      default: "bg-transparent",
      muted: "bg-muted/30",
      accent: "bg-accent/10",
      alt: "bg-card",
    },
    spacing: {
      tight: "py-8 md:py-10",
      normal: "py-12 md:py-16",
      loose: "py-16 md:py-24",
    },
    divider: {
      none: "",
      top: "border-t border-border",
      bottom: "border-b border-border",
      both: "border-y border-border",
    },
  },
  defaultVariants: {
    background: "default",
    spacing: "normal",
    divider: "none",
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  container?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, background, spacing, divider, container = true, children, ...props },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ background, spacing, divider }), className)}
        {...props}
      >
        {container ? <div className="container mx-auto px-4">{children}</div> : children}
      </section>
    )
  }
)
Section.displayName = "Section"

const SectionHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("max-w-3xl mx-auto text-center mb-8 md:mb-12", className)} {...props} />
)

const SectionTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("text-h3 md:text-h2 font-headline", className)} {...props} />
)

const SectionDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("mt-3 text-muted-foreground text-lg", className)} {...props} />
)

export { Section, SectionHeader, SectionTitle, SectionDescription, sectionVariants }
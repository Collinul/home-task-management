import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "icon" | "full" | "compact"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  responsive?: boolean
}

export function Logo({ variant = "full", size = "md", className, responsive = false }: LogoProps) {
  const sizeClasses = {
    sm: { icon: "h-5 w-5", text: "text-lg" },
    md: { icon: "h-6 w-6", text: "text-xl" },
    lg: { icon: "h-8 w-8", text: "text-2xl" },
    xl: { icon: "h-12 w-12", text: "text-3xl" }
  }

  const currentSize = sizeClasses[size]

  const LogoIcon = () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(currentSize.icon, "flex-shrink-0")}
    >
      {/* House base */}
      <path
        d="M20 4L34 16V32C34 34.2091 32.2091 36 30 36H10C7.79086 36 6 34.2091 6 32V16L20 4Z"
        fill="currentColor"
        className="text-primary"
      />
      
      {/* Roof accent */}
      <path
        d="M20 4L34 16H6L20 4Z"
        fill="currentColor"
        className="text-primary opacity-80"
      />
      
      {/* Window/Task grid */}
      <rect
        x="12"
        y="20"
        width="16"
        height="12"
        rx="2"
        fill="white"
        className="text-background"
      />
      
      {/* Task checkmarks */}
      <path
        d="M15 24L17 26L21 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
      
      <path
        d="M15 28L17 30L21 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
      
      {/* Door */}
      <rect
        x="18"
        y="28"
        width="4"
        height="8"
        rx="2"
        fill="currentColor"
        className="text-primary opacity-60"
      />
      
      {/* Door handle */}
      <circle
        cx="21"
        cy="32"
        r="0.5"
        fill="white"
        className="text-background"
      />
    </svg>
  )

  if (variant === "icon") {
    return <LogoIcon />
  }

  if (responsive) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <LogoIcon />
        {variant === "full" && (
          <span className={cn("font-bold hidden sm:inline-block", currentSize.text)}>
            TaskHub
          </span>
        )}
        {variant === "compact" && (
          <span className={cn("font-bold hidden xs:inline-block", currentSize.text)}>
            TH
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon />
      {variant === "full" && (
        <span className={cn("font-bold", currentSize.text)}>
          TaskHub
        </span>
      )}
      {variant === "compact" && (
        <span className={cn("font-bold", currentSize.text)}>
          TH
        </span>
      )}
    </div>
  )
}
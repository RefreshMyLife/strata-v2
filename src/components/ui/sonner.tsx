import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-right"
      closeButton={false}
      duration={4000}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast !border-none group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg group-[.toaster]:p-[14px] group-[.toaster]:gap-3 group-[.toaster]:min-w-[390px]",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success: "!bg-[#1E211F] !border-none",
          error: "!bg-[#211F1E] !border-none",
          warning: "!bg-[#21201E] !border-none",
          info: "!bg-[#1E2021] !border-none",
        },
        style: {
          fontFamily: "DM Sans, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: 1.4285714285714286,
          letterSpacing: "-0.01em",
          color: "#D0D6D9",
          boxShadow: "0px 12px 32px 0px rgba(12, 12, 12, 0.4)",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

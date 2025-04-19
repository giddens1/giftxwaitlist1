
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function CustomToaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, className, ...props }) {
        const isSuccess = className?.includes("border-green-200");
        
        return (
          <Toast key={id} className={className} {...props}>
            <div className="grid gap-1">
              {title && (
                <ToastTitle className={isSuccess ? "text-[#10B981] animate-fade-in" : ""}>
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className={isSuccess ? "text-[#10B981]/80" : ""}>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

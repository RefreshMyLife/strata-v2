import { toast as sonnerToast } from "sonner";
import {
  InformationBlueFill,
  CloseCircleFill,
  AlertFill,
  CheckboxCircleFill,
} from "@/components/icons/toast";

export const toast = {
  success: (message: string) => {
    return sonnerToast.success(message, {
      icon: <CheckboxCircleFill />,
    });
  },

  error: (message: string) => {
    return sonnerToast.error(message, {
      icon: <CloseCircleFill />,
    });
  },

  warning: (message: string) => {
    return sonnerToast.warning(message, {
      icon: <AlertFill />,
    });
  },

  info: (message: string) => {
    return sonnerToast.info(message, {
      icon: <InformationBlueFill />,
    });
  },
};

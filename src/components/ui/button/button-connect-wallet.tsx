import * as React from "react";
import { ButtonConnectWalletDisconnected } from "./button-connect-wallet-disconnected";
import { ButtonConnectWalletConnected } from "./button-connect-wallet-connected";

type ButtonConnectWalletProps = React.ComponentProps<"button"> & {
  connected?: boolean;
  address?: string;
  isDropdownOpen?: boolean;
};

/**
 * Wrapper компонент для обратной совместимости.
 * Рекомендуется использовать ButtonConnectWalletDisconnected или
 * ButtonConnectWalletConnected напрямую для лучшей типизации.
 */
function ButtonConnectWallet({
  connected = false,
  ...props
}: ButtonConnectWalletProps) {
  if (!connected) {
    return <ButtonConnectWalletDisconnected {...props} />;
  }
  return <ButtonConnectWalletConnected {...props} />;
}

export { ButtonConnectWallet };

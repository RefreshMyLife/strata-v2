import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { WalletMenu } from "./WalletMenu";
import { ButtonConnectWallet } from "../ui/button/button-connect-wallet";

export function ConnectWalletButton() {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  // Если кошелек подключен, показываем меню
  if (isConnected && address) {
    return <WalletMenu address={address} />;
  }

  // Если не подключен, показываем кнопку подключения
  return (
    <ButtonConnectWallet onClick={openConnectModal} connected={false}>
      CONNECT WALLET
    </ButtonConnectWallet>
  );
}

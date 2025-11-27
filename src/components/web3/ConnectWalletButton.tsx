import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { WalletMenu } from "./WalletMenu";
import { ButtonConnectWallet } from "../ui/button/button-connect-wallet";

interface ConnectWalletButtonProps {
  className?: string;
  hideWhenConnected?: boolean;
}

export function ConnectWalletButton({
  className,
  hideWhenConnected = false
}: ConnectWalletButtonProps) {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  // Если кошелек подключен
  if (isConnected && address) {
    // Если указано скрывать при подключении, не рендерим ничего
    if (hideWhenConnected) {
      return null;
    }
    // Иначе показываем меню
    return <WalletMenu address={address} />;
  }

  // Если не подключен, показываем кнопку подключения
  return (
    <ButtonConnectWallet
      onClick={openConnectModal}
      connected={false}
      className={className}
    >
      CONNECT WALLET
    </ButtonConnectWallet>
  );
}

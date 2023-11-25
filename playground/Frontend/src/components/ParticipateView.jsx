import { useContract, useTx, useWallet, useBalance } from "useink";
import metadata from "../assets/moes_coaster.json";
import PrimaryButton from "./PrimaryButton";
import styles from "./ParticipateView.module.css";
import { SupportedChainId } from "@azns/resolver-core";
import { useResolveAddressToDomain } from "@azns/resolver-react";
import BalanceView from "./BalanceView";

const ParticipateView = () => {
  const { account, disconnect } = useWallet();

  const CONTRACT_ADDRESS = "5FHoLBmE5ooiPgZ8y2Vsekiy35b2KajFBZNuDAR7Jj5bGYgn";
  const contract = useContract(CONTRACT_ADDRESS, metadata, "aleph-testnet");
  const participate = useTx(contract, "moesCoaster::participateScratchCard");

  const scratchIt = async () => {
    try {                         
      const bigIntValue = BigInt("10000000000000");
      participate.signAndSend([5], { value: bigIntValue });
    } catch (e) {
      console.log(e);
    }
  };

  const { primaryDomain, error } = useResolveAddressToDomain(account?.address, {
    chainId: SupportedChainId.AlephZeroTestnet,
  });

  return (
    <>
      <div className={styles.participateViewFlex}>
        <PrimaryButton label={"Scratch Me"} labelVis={true} onClick={scratchIt}>
          Scratch Me
        </PrimaryButton>
        <div className={styles.pushDown}>
          <PrimaryButton
            label={`Disconnect`}
            labelVis={true}
            onClick={disconnect}
          >
            Disconnect Wallet
          </PrimaryButton>
          <code>{primaryDomain ? primaryDomain : account?.name}</code>
          <BalanceView />
        </div>
      </div>
    </>
  );
};
export default ParticipateView;

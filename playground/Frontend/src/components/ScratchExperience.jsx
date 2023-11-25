import { useWallet } from "useink";
import SelectWalletView from "./SelectWalletView";
import ParticipateView from "./ParticipateView";

const ScratchExperience = () => {
  const { account } = useWallet();

  if (!account) {
    return (
      <div className="button-container">
        <SelectWalletView />
      </div>
    );
  }
  return (
    <div className="button-container">
      <ParticipateView />
    </div>
  );
};

export default ScratchExperience;

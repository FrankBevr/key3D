import { useAllWallets, useWallet } from "useink";
import PrimaryButton from "./PrimaryButton";
import styles from "./SelectWalletView.module.css";

const SelectWalletView = () => {
  const wallets = useAllWallets();
  const { connect } = useWallet();
  return (
    <div className={styles.walletViewFlex}>
      {wallets.map((w) => (
        <div key={w.title}>
          {w.installed ? (
            <PrimaryButton
              iconLeftVis={true}
              iconLeftComp={
                <img
                  src={w.logo.src}
                  style={{ width: 24, height: 24 }}
                  alt={w.logo.alt}
                />
              }
              labelVis={true}
              label={`Connect ${w.title}`}
              onClick={() => connect(w.extensionName)}
            ></PrimaryButton>
          ) : (
            <PrimaryButton
              labelVis={true}
              label={`Install ${w.title}`}
              iconLeftVis={true}
              iconLeftComp={
                <img
                  src={w.logo.src}
                  style={{ width: 24, height: 24 }}
                  alt={w.logo.alt}
                />
              }
              href={w.installUrl}
              style={{ width: "100%" }}
            ></PrimaryButton>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectWalletView;

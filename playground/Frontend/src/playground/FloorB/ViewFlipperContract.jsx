import { useWallet, useAllWallets, useCallSubscription } from "useink";

import { useCall, useContract, useTx } from "useink";
import metadata from "../../assets/flipper.json";
import { useEffect, useState } from "react";
import { pickDecoded } from "useink/utils";

const ViewFlipperContract = () => {
  const [flipValue, setFlipValue] = useState(null);
  const [autoUpdate, setAutoUpdate] = useState(false);
  const { account, connect, disconnect } = useWallet();
  const wallets = useAllWallets();

  const CONTRACT_ADDRESS = "5G7mrDs8836fgXS8Z3VS3CrKGwZ5sNzYKDNU1Qe6wdAkDBCe";
  const contract = useContract(CONTRACT_ADDRESS, metadata, "localnode");
  const get = useCall(contract, "get");
  const getSub = useCallSubscription(contract, "get");
  const flip = useTx(contract, "flip");

  useEffect(() => {
    if (flipValue) {
      getValue();
    }
  }, [flipValue]);

  useEffect(() => {
    if (autoUpdate) {
      if (getSub.result?.ok) {
        const data = pickDecoded(getSub.result);
        setFlipValue(data);
      }
    }
  }, [getSub.result]);

  const setAutomaticUpdate = () => {
    setAutoUpdate(!autoUpdate);
  };

  const getValue = () => {
    setFlipValue(getSub.result?.value.decoded);
  };

  const flipIt = () => {
    flip.signAndSend();
  };

  if (!account) {
    return (
      <ul>
        {wallets.map((w) => (
          <li key={w.title} style={{ listStyle: "none" }}>
            {w.installed ? (
              <button onClick={() => connect(w.extensionName)}>
                <img
                  src={w.logo.src}
                  style={{ width: 20, height: 20 }}
                  alt={w.logo.alt}
                />
                Connect to {w.title}
              </button>
            ) : (
              <a href={w.installUrl}>
                <img
                  src={w.logo.src}
                  style={{ width: 20, height: 20 }}
                  alt={w.logo.alt}
                />
                Install {w.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div style={{ border: "2px solid green", margin: 20, borderRadius: 10 }}>
      <h1>Hello FetchSmartContract</h1>;
      <p>You are connected as {account?.name || account.address}</p>
      <button onClick={disconnect}>Disconnect Wallet</button>
      <h1>Call something</h1>
      <button disabled={get.isSubmitting} onClick={flipIt}>
        Flip Value
      </button>
      <button disabled={get.isSubmitting} onClick={getValue}>
        Get Value
      </button>
      <button onClick={setAutomaticUpdate}>
        Set Automatic Update to {autoUpdate ? "false" : "true"}
      </button>
      <p>
        Current flipValue is {flipValue === false ? "its false" : "its true"}
      </p>
    </div>
  );
};
export default ViewFlipperContract;

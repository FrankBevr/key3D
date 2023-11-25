import { useEffect } from "react";
import { useBalance, useWallet } from "useink";

const BalanceView = () => {
  const { account } = useWallet();
  const balance = useBalance(account);
  return (
    <>
      <br />
      <code>Current Balance:</code>
      <code>{balance !== undefined ? balance.freeBalance.toPrimitive() / 1_000_000_000_000_000 : ''} </code>
    </>
  );
};

export default BalanceView;

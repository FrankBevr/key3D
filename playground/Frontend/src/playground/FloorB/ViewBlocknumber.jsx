import { useEffect, useState } from "react";
import { useBlockHeader } from "useink";

const ViewBlocknumber = () => {
  const [blockNumber, setBlockNumber] = useState(null);
  let localnode = useBlockHeader("localnode");

  useEffect(() => {
    if (localnode) {
      setBlockNumber(localnode.blockNumber);
    }
  }, [localnode]);

  return (
    <div style={{ border: "2px solid green", margin: 20, borderRadius: 10 }}>
      <h1>Hello FetchBlockNumber</h1>
      <p>
        Current Blocknumber
        {localnode === undefined ? " not fetch yet" : ` ${blockNumber}`}
      </p>
    </div>
  );
};

export default ViewBlocknumber;

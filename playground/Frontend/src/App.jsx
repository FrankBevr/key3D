import { UseInkProvider } from "useink";
import { Custom } from "useink/chains";
import ArExperience from "./components/ArExperience";
import ScratchExperience from "./components/ScratchExperience";
import { useViewState } from "./store/store"; // import the ViewState store
import { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";
import styles from "./App.module.css";
import { AlephTestnet } from "useink/chains";

const LocalChain = {
  ...Custom,
  id: "localnode",
  name: "localnode",
  rpcs: ["ws://localhost:9944"],
};

const App = () => {
  const currentIndex = useViewState((state) => state.currentIndex); // get the currentIndex state
  const forward = useViewState((state) => state.forward); // get the currentIndex state
  const backward = useViewState((state) => state.backward); // get the currentIndex state
  const [started, setStarted] = useState(null);

  return (
    <>
      <UseInkProvider
        config={{ dappName: "MoesTaverne", chains: [AlephTestnet] }}
      >
        {currentIndex === 0 ? (
          <ArExperience started={started} />
        ) : (
          <>
            <ScratchExperience />
          </>
        )}
        <div className={styles.buttonContainerTop}>
          {currentIndex === 0 && (
            <PrimaryButton
              label={"Mushi Lottery"}
              iconRightVis={true}
              labelVis={true}
              onClick={() => {
                backward();
              }}
            ></PrimaryButton>
          )}
          {currentIndex === 1 && (
            <>
              <PrimaryButton
                label={"Back"}
                iconLeftVis={true}
                labelVis={true}
                onClick={() => {
                  backward();
                }}
              ></PrimaryButton>
            </>
          )}
        </div>
        <div className={styles.buttonContainerBottom}>
          {started === null && currentIndex === 0 && (
            <PrimaryButton
              label={"View Coaster"}
              labelVis={true}
              onClick={() => {
                setStarted("three");
              }}
            >
              View Coaster
            </PrimaryButton>
          )}
          {started !== null && currentIndex === 0 && (
            <PrimaryButton
              label={"Stop"}
              labelVis={true}
              onClick={() => {
                setStarted(null);
              }}
            >
              View Coaster
            </PrimaryButton>
          )}
        </div>
      </UseInkProvider>
      <div className={styles.frame}></div>
    </>
  );
};

export default App;

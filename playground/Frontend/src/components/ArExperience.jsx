import { useState } from "react";
import MindARThreeViewer from "./mindar-three-viewer";

const ArExperience = ({ started }) => {
  // const [started, setStarted] = useState(null);

  return (
    <>
      {started === "three" && (
        <div className="container">
          <MindARThreeViewer />
        </div>
      )}
    </>
  );
};

export default ArExperience;

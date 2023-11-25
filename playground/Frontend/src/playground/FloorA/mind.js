import * as THREE from "three";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";

const mind = () => {
  const frontCameraDeviceSelect = document.querySelector(
    "#frontCameraDeviceSelect",
  );
  const backCameraDeviceSelect = document.querySelector(
    "#backCameraDeviceSelect",
  );

  let mindarThree = null;

  const setup = () => {
    const userDeviceId = frontCameraDeviceSelect.value
      ? frontCameraDeviceSelect.value
      : undefined;
    const environmentDeviceId = backCameraDeviceSelect.value
      ? backCameraDeviceSelect.value
      : undefined;

    console.log("setup:", userDeviceId, environmentDeviceId);

    mindarThree = new MindARThree({
      container: document.querySelector("#container"),
      imageTargetSrc: "/card.mind",
      filterMinCF: 1,
      filterBeta: 10000,
      missTolerance: 0,
      warmupTolerance: 0,
      userDeviceId,
      environmentDeviceId,
    });
    const anchor = mindarThree.addAnchor(0);
    const geometry = new THREE.PlaneGeometry(1, 0.55);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
    });
    const plane = new THREE.Mesh(geometry, material);
    anchor.group.add(plane);
  };

  const start = async () => {
    if (!mindarThree) {
      setup();
    }
    const { renderer, scene, camera } = mindarThree;
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };

  const startButton = document.querySelector("#startButton");
  startButton.addEventListener("click", () => {
    start();
  });

  const stopButton = document.querySelector("#stopButton");
  stopButton.addEventListener("click", () => {
    mindarThree.stop();
    mindarThree.renderer.setAnimationLoop(null);
  });

  const switchButton = document.querySelector("#switchButton");
  switchButton.addEventListener("click", () => {
    mindarThree.switchCamera();
  });

  navigator.mediaDevices
    .enumerateDevices()
    .then(function (devices) {
      devices.forEach(function (device) {
        console.log("device", device);

        if (device.kind === "videoinput") {
          const option = document.createElement("option");
          option.text =
            device.label || "camera " + frontCameraDeviceSelect.length;
          option.value = device.deviceId;

          const option2 = document.createElement("option");
          option2.text =
            device.label || "camera " + backCameraDeviceSelect.length;
          option2.value = device.deviceId;

          frontCameraDeviceSelect.appendChild(option);
          backCameraDeviceSelect.appendChild(option2);
        }

        console.log(
          device.kind + ": " + device.label + " id = " + device.deviceId,
        );
      });
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });
};

export default mind;

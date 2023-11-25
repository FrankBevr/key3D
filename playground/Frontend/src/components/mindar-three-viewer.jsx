import React, { useEffect, useRef } from "react";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mindarThree = new MindARThree({
      container: containerRef.current,
      imageTargetSrc:
        "/car.mind",
      uiLoading: false,
      uiScanning: false,
      uiError: false,
    });
    const { renderer, scene, camera } = mindarThree;
    const anchor = mindarThree.addAnchor(0);

    const textureLoader = new THREE.TextureLoader();
    const objLoader = new OBJLoader();

    textureLoader.load(
      "/mushroom_texture.jpg",
      (texture) => {
        const newMaterial = new THREE.MeshBasicMaterial({ map: texture, opacity: 0.90, transparent: true });

        objLoader.load(
          "/mushroom.obj",
          (object) => {
            object.traverse((node) => {
              if (node.isMesh) {
                node.material = newMaterial;
              }
            });
            object.scale.set(0.1, 0.1, 0.1);
            anchor.group.add(object);
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          (error) => console.error(error)
        );
      },
      undefined,
      (error) => console.error(error)
    );

    mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      mindarThree.stop();
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }} ref={containerRef}></div>
  );
};

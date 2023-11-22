<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";

import * as THREE from "three";
//@ts-ignore
import { MindARThree } from "mindar";
//@ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const startRef = ref<HTMLElement | null>(null);
const stopRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const styleRef = ref({ height: "800px" });

onMounted(() => {
  const container = containerRef.value!;
  const stopBtn = stopRef.value!;
  const startBtn = startRef.value!;

  // Set the zIndex of stopBtn and startBtn
  stopBtn.style.zIndex = "5";
  startBtn.style.zIndex = "5";

  const mindarThree = new MindARThree({
    container,
    imageTargetSrc: "/beer.mind",
    uiLoading: "no",
    uiScanning: "no",
    uiError: "no",
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);

  // Load the GLTF model
  const loader = new GLTFLoader();
  loader.load('/scene.gltf ', function (gltf: any) {
    const model = gltf.scene;

    // Traverse the model to modify the materials
    model.traverse(function (node: any) {
      if (node.isMesh) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach(function (material: any) {
          // Set transparent property to true
          material.transparent = true;
          // Set the desired opacity value
          material.opacity = 0.5;
        });
      }
    });

    // Adjust the position, scale, and rotation of the model if needed
    model.position.set(-0.5, 0, 0.25);
    model.scale.set(0.01, 0.01, 0.01);
    model.rotation.set(Math.PI * 0.5, 0, 0);

    anchor.group.add(model);
  });

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
  anchor.group.add(ambientLight);

  const resizeRenderer = () => {
    container.style.width = window.innerWidth.toString();
    container.style.height = (window.innerHeight + 200).toString();
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  window.addEventListener('resize', resizeRenderer);
  watchEffect(() => {
    resizeRenderer();
  });

  const start = async () => {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };

  startBtn.addEventListener("click", () => {
    start();
  });

  stopBtn.addEventListener("click", () => {
    mindarThree.stop();
    mindarThree.renderer.setAnimationLoop(null);
  });
});
</script>

<template>
  <button ref="stopRef">Stop</button>
  <button ref="startRef">Start</button>
  <div :style="styleRef" ref="containerRef"></div>
</template>

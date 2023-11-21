import { onMounted, ref } from "vue";
import * as THREE from "three";
//@ts-ignore
import { MindARThree } from "mindar";
export default {
  setup() {
    const containerRef = ref<HTMLElement | null>(null);
    const startRef = ref<HTMLElement | null>(null);
    const stopRef = ref<HTMLElement | null>(null);
    const message = ref("Hello World!");

    onMounted(() => {
      const container = containerRef.value!;
      container.style.height = "500px";
      container.style.width = "500px";

      const stopBtn = stopRef.value!;
      const startBtn = startRef.value!;

      const mindarThree = new MindARThree({
        container,
        imageTargetSrc:
          "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/card.mind",
        uiLoading: "no",
        uiScanning: "no",
        uiError: "no",
      });
      const { renderer, scene, camera } = mindarThree;
      const anchor = mindarThree.addAnchor(0);
      const geometry = new THREE.PlaneGeometry(1, 0.55);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.5,
      });
      const plane = new THREE.Mesh(geometry, material);
      anchor.group.add(plane);
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

    return {
      message,
      containerRef,
      stopRef,
      startRef,
    };
  },
  template: `
    <h2>Hello Vue App</h2>
    <p>{{ message }}</p>
    <div ref="containerRef"></div>
    <button ref="stopRef">Stop</button>
    <button ref="startRef">Start</button>
  `,
};

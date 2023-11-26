//@ts-ignore
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three'
export function setupWebAR(element: HTMLDivElement) {
  const container = document.createElement('div')

  const mindarThree = new MindARThree({
    container,
    imageTargetSrc: "/card.mind",
    uiLoading: "no",
    uiScanning: "no",
    uiError: "no",
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);

  const cube = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial()
  const mesh = new THREE.Mesh(cube, material)
  anchor.group.add(mesh)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
  anchor.group.add(ambientLight);

  async function start() {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start()

  container.style.width = "500px"
  container.style.height = "500px"
  element.appendChild(container)
}

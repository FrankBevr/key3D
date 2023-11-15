import { ref, onMounted } from 'vue'
import * as THREE from 'three'
export default {
  setup() {
    const containerRef = ref<HTMLElement | null>(null)
    const message = ref('Hello World!')

    onMounted(() => {
      const container = containerRef.value!
      container.style.height = "500px"
      container.style.width = "500px"

      // Create a Three.js scene
      const scene = new THREE.Scene()

      // Create a camera
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
      camera.position.z = 5

      // Create a renderer
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(renderer.domElement)

      // Create a cube
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshNormalMaterial()
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      // Animation loop
      function animate() {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()
    })

    return {
      message,
      containerRef
    }
  },
  template: `
    <h2>Hello Vue App</h2>
    <p>{{ message }}</p>
    <div ref="containerRef"></div>
  `
}

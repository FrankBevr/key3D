import { ref } from 'vue'
export default {
  setup() {
    const message = ref('Hello World!')
    return {
      message
    }
  },
  template: `
    <h2>Hello Vue App</h2>
    <p>{{ message }}</p>
  `
}

import ARView from "./views/ARView";
import ButtonComp from "./components/ButtonComp.ts";
import { ref } from "vue";
export default {
  components: {
    ARView,
    ButtonComp
  },
  setup() {
    const label = ref('Hello From Parent')
    return {
      label
    }
  },
  template: `
    <ButtonComp :label="label"></ButtonComp>
  `,
};

export default {
  props: {
    label: String
  },
  template: `
     <button :style="{ color: 'red' }">{{label || 'No props passed yet'}}</button>
  `,
}

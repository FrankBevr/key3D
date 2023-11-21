export default {
  props: {
    label: String
  },
  template: `
    <button>{{label || 'No props passed yet'}}</button>
  `,
}

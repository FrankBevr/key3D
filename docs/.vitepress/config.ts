import { taskLists } from '@hedgedoc/markdown-it-plugins'

export default {
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  title: "Key3d",
  description: "3D Ramen DAO",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    logo: "https://img.freepik.com/free-vector/ramen-noodle-egg-meat-with-chopstick-cartoon_138676-2543.jpg",
    sidebar: [
      {
        text: "Journey",
        items: [
          { text: "Monday", link: "/Journey/Monday" },
          { text: "Tuesday", link: "/Journey/Tuesday" },
        ],
      },
      {
        text: "Notes",
        items: [
          { text: "Launch Event", link: "/Notes/FrankNotes-OpeningEvent" },
          { text: "Software Design", link: "/Notes/Software-Design" },
          { text: "Software Design 2", link: "/Notes/Software-Design-2" },
          { text: "Software Design 3", link: "/Notes/Software-Design-3" },
          { text: "Frank Ideation", link: "/Notes/FrankIdeation" },
          { text: "Meeting Notes Astar", link: "/Notes/Meeting-Astar-Us" },
          { text: "Meeting Notes Frank Josiah", link: "Notes/Meeting-JoFr-AusGer" },
          { text: "Meeting Notes Frank Josiah 2", link: "Notes/Meeting-JoFr-MadLis" },
          { text: "Web3 Foundation Workshop", link: "Notes/web3foundation" },
          { text: "Braindump Figma", link: "Notes/Todo-Figma" },
          { text: "Random", link: "Notes/notes" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/frankbevr/key3d" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(taskLists, { enabled: true, label: true, lineNumber: true })
    }
  }
}

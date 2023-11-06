import { taskLists } from '@hedgedoc/markdown-it-plugins'

export default {
  title: "Key3d",
  description: "3D Ramen DAO",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    logo: "https://img.freepik.com/free-vector/ramen-noodle-egg-meat-with-chopstick-cartoon_138676-2543.jpg",
    sidebar: [
      {
        text: "Notes",
        items: [
          { text: "Launch Event", link: "/Notes/Notes-LaunchEvent" },
          { text: "Software Design", link: "/Notes/Software-Design" },
          { text: "Get Block", link: "/Notes/Archy_GetBlock" },
          { text: "AZero", link: "/Notes/dennis_integrate_azero_id" },
          { text: "Ink Championship", link: "/Notes/german_ink_championship" },
          { text: "Safe and Robust Ink", link: "/Notes/piotr_safeAndRobuts" },
          {
            text: "Ink Storage",
            link: "/Notes/uladzislau_deep_dive_ink_storage",
          },
          { text: "Org Recap", link: "/Notes/org_recap" },
          { text: "Zustand Notes", link: "/Notes/Zustand" },
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

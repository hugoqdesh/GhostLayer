import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "GhostLayer",
  },
  githubUrl: "https://github.com/hugoqdesh/ghostlayer",
  links: [
    {
      text: "Getting Started",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Useful Links",
      url: "#",
      active: "nested-url",
    },
    {
      text: "❤️ Donate",
      url: "#",
      active: "nested-url",
    },
  ],
};

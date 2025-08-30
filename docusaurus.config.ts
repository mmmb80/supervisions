import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Bálint Molnár',
  url: 'https://mmmb80.github.io',
  baseUrl: '/supervisions/',
  projectName: 'supervisions',
  organizationName: 'mmmb80',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/mmmb80/supervisions/tree/main/',
        },
        blog: false,
      },
    ],
  ],
};

export default config;

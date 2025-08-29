import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'My Website',
  url: 'https://mmmb80.github.io', // your GitHub username
  baseUrl: '/supervisions/',                  // your repo name; use '/' if repo is <username>.github.io
  projectName: 'supervisions',
  organizationName: 'mmmb80',
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
      },
    ],
  ],
};

export default config;
module.exports = {
  title: 'Simply5',
  tagline: 'Networking from the cloud',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CloudLAN',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          href: 'https://simply5.io',
          label: 'Download',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Simply5',
        src: 'img/logo-dark.svg',
        href: 'https://simply5.io',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Simply5 CloudLAN.`,
    },
    colorMode: {
      switchConfig: {
        darkIcon: '⚪',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '⚫',
        lightIconStyle: {
          marginLeft: '1px',
        }
      }

    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/simply5-io/wiki',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/simply5-io/wiki/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

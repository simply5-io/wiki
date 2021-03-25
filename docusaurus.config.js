module.exports = {
  title: 'Simply5 CloudLAN',
  tagline: "Democratizing Networking for SMB's",
  url: 'https://wiki.simply5.io',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Simply5 Labs', // Usually your GitHub org/user name.
  projectName: 'simply5-io/wiki', // Usually your repo name.
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
          href: 'https://www.simply5.io/download',
          label: 'Download',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        { search: true },
        //TODO:Update Blog integration
        // { to: 'blog', label: 'Blog', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Simply5',
        src: 'img/logo-dark.svg',
        href: 'https://simply5.io',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Simply5 Labs.`,
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
  scripts: [
    {
      src: "https://embed.tawk.to/5f327569f87ad20c6d7cda98/default",
      async: true
    }
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/simply5-io/wiki/edit/dev/',
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

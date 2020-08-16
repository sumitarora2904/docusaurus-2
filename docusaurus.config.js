module.exports = {
  title: 'AroraTricks',
  tagline: 'Best Place for Android and Tech Lovers',
  url: 'https://arora.versel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'AroraTricks', // Usually your GitHub org/user name.
  projectName: 'arora', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AroraTricks',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          href: 'http://tv.aroratricks.cf/',
          label: 'AroraTV',
          position: 'left',
        },
        {
          href: 'http://pro.aroratricks.cf/',
          label: 'Sumit Arora',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AroraTricks. Built with ♥️ in India.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SalesLobe',
  tagline: 'API Documentation',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://docs.saleslobe.com',
  baseUrl: '/',

  organizationName: 'paulpuntacana',
  projectName: 'saleslobe-docs',

  onBrokenLinks: 'warn',

  headTags: [
    {
      tagName: 'meta',
      attributes: { name: 'description', content: 'SalesLobe API documentation — leads, campaigns, AI suggestions, webhooks and more.' },
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:description', content: 'SalesLobe API documentation — leads, campaigns, AI suggestions, webhooks and more.' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'twitter:card', content: 'summary_large_image' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'manifest', href: '/site.webmanifest' },
    },
  ],

  i18n: { defaultLocale: 'en', locales: ['en'] },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
          showLastUpdateTime: false,
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: false,
      title: 'SalesLobe',
      logo: {
        alt: 'SalesLobe',
        src: 'img/logo.png',
        style: { height: '26px', width: 'auto' },
      },
      items: [
        {
          label: 'API v1',
          position: 'left',
          href: '/',
          className: 'navbar-version-badge',
        },
        {
          href: 'https://app.saleslobe.com',
          label: 'Dashboard',
          position: 'right',
          className: 'navbar-dashboard-link',
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} SalesLobe`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'python', 'json'],
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

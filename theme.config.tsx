import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>AIPTx</span>,
  project: {
    link: 'https://github.com/aiptx',
  },
  chat: {
    link: 'https://discord.gg/aiptx',
  },
  docsRepositoryBase: 'https://github.com/IntelligenceX-org/docs.aiptx.io',
  footer: {
    text: 'AIPTx Documentation',
  },
  primaryHue: 160,
  primarySaturation: 60,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AIPTx Documentation" />
      <meta property="og:description" content="AI-Powered Penetration Testing" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s - AIPTx Docs'
    }
  }
}

export default config

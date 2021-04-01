import I18nProvider from 'next-translate/I18nProvider'

import common from '../locales/en/common.json'
import '../styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  Story => (
    <I18nProvider lang="en" namespaces={{ common }}>
      <Story />
    </I18nProvider>
  )
]

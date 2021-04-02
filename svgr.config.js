module.exports = {
  plugins: ['@svgr/plugin-jsx'],
  icon: true,
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['path', 'svg'],
            attributes: [
              {
                name: 'className',
                value: 'icon',
                spread: false,
                literal: false,
                position: 'end'
              }
            ]
          }
        ]
      ]
    }
  }
}

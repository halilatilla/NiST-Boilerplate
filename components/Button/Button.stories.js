import React from 'react'

import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

const Template = args => <Button {...args} />

export const FirstStory = Template.bind({
  // label: 'First',
  children: 'eeeeessage'
})

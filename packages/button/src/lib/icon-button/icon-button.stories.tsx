import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from './icon-button';
import Icon from '../Icon';

export default {
  title: 'Buttons/Icon Button',
  component: IconButton,
  decorators: [
    (Story) => (
      <>
        <div
          style={{
            padding: '3rem',
          }}
        >
          <Story />
        </div>
        <div
          className="dark"
          style={{
            padding: '3rem',
            backgroundColor: '#202A37',
          }}
        >
          <Story />
        </div>
      </>
    ),
  ],
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <Icon className="w-4 h-4" />
  </IconButton>
);

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  size: 'medium',
  colorScheme: 'primary',
  isActive: false,
  disabled: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...Solid.args,
  variant: 'ghost',
};

export const Outline = Template.bind({});
Outline.args = {
  ...Solid.args,
  variant: 'outline',
};

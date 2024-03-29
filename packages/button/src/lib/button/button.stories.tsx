import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from '../Icon';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
  },
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  leftIcon,
  rightIcon,
  ...args
}) => (
  <Button
    leftIcon={leftIcon ? <Icon /> : null}
    rightIcon={rightIcon ? <Icon /> : null}
    {...args}
  />
);

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  size: 'medium',
  colorScheme: 'primary',
  children: 'Button',
  leftIcon: false,
  rightIcon: false,
  fullWidth: false,
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

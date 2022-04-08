import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

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

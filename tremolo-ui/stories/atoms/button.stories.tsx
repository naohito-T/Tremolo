import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@/components/atoms';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button
    {...args}
    onClick={() => {
      console.log('click!');
    }}
  >
    ボタン
  </Button>
);

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
};

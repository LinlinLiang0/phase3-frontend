import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyHeader from './MyHeader';

export default {
  title: 'Example/MyHeader',
  component: MyHeader,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof MyHeader>;

const Template: ComponentStory<typeof MyHeader> = () => <MyHeader/>;

export const ContactUs = Template.bind({});
ContactUs.args = {
};
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/button/button';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta:Meta<typeof Button> = {
  title: 'Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    description: 'Primary Button',
    variant: 'country__btn'
  },
};

export const IconButton: Story = {
  args: {
    description: 'Icon Button',
    variant: 'country__btn',
    icon: faHome
  },
};
/*
export const UrlButton: Story = {
  args: {
    description: 'URL Button',
    variant: 'country__btn',    
    redirectTo: '/'
  },
}; */

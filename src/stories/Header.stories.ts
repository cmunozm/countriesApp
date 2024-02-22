import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/header/Header';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHeader: Story = {
  args: {
    title: 'Where in the world?'
  }
}
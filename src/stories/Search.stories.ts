import type { Meta, StoryObj } from '@storybook/react';
import Search from '../components/search/Search';

const meta: Meta<typeof Search> = {
  title: 'Search',
  tags: ['autodocs'],
  component: Search,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSearch: Story = {};
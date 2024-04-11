import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  tags: ['autodocs'],
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDropdown: Story = {
  args: {
    options: ['Africa', 'América', 'Asia']
  }
};
import type { Meta, StoryObj } from '@storybook/react';
import Borders from '../components/borders/Borders';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta:Meta<typeof Borders> = {
  title: 'Borders',
  tags: ['autodocs'],
  component: Borders,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBorders: Story = {
  args: {
    title: 'Borders',
    bordersList: ['Colombia', 'Venezuela', 'Brazil']
  },
};

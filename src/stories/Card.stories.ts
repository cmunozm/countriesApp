import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/card/Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  parameters: {    
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    name: 'Brazil',
    population: 2064653,
    region: 'Americas',
    capital: 'Brasilia',
    urlImage: 'https://flagcdn.com/w320/br.png',
  }
}

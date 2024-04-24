import type { Meta, StoryObj } from '@storybook/react';
import List from '../components/list/List'; 
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof List> = {
  title: 'List',
  tags: ['autodocs'],
  component: List,
  parameters: {    
    layout: 'centered',
  },
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    variant:'country__details',
    listData: [
      {
        title: 'Native Name',
        description: 'name',
      },
      {
        title: 'Population',
        description: 'desc',
      },
      {
        title: 'Region',
        description: 'countryInfo.region',
      },
      {
        title: 'Sub Region',
        description: 'countryInfo.subregion',
      },
      {
        title: 'Capital',
        description: 'countryInfo.capital',
      },
      {
        title: 'Top Level Domain',
        description: '',
      },
      {
        title: 'Currencies',
        description: 'currency',
      },
      {
        title: 'Lenguages',
        description: 'leng',
      },
    ]
  }
}

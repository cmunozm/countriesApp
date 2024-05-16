import type { Meta, StoryObj } from '@storybook/react';
import Country from '../pages/country/Country';
import { Region } from '../infrastructure/apiTypes';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof Country> = {
  title: 'Country',
  tags: ['autodocs'],
  component: Country,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultContry: Story = {
  args: {
    countryData: {
      name: "Belgium",      
      cca3: "BEL",
      currencies: {
        "EUR": {
        "name": "Euro",
        "symbol": "€"
        }
        },      
      capital: ["Brussels"],    
      tld: [
        ".be"
        ],
      region: Region.Europe,
      subregion: "Western Europe",
      languages: {
        deu: "German",
        fra: "French",
        nld: "Dutch"
      },
      borders: [
        "FRA",
        "DEU",
        "LUX",
        "NLD"
      ],
      population: 11555997,
      flag: "https://flagcdn.com/w320/be.png",
    }}
  }
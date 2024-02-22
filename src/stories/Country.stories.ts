import type { Meta, StoryObj } from '@storybook/react';
import Country from '../components/country/country';
import { Region } from '../infrastructure/apiTypes';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof Country> = {
  title: 'Country',
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
      name: {
        common: "Belgium",
        official: "Kingdom of Belgium",
        nativeName: {}
      },
      tld: [],
      cca2: "BE",
      ccn3: "056",
      cca3: "BEL",
      cioc: "BEL",
      independent: true,
      unMember: true,
      currencies: {},
      idd: {},
      capital: [],
      altSpellings: [],
      region: Region.Europe,
      subregion: "Western Europe",
      languages: {
        deu: "German",
        fra: "French",
        nld: "Dutch"
      },
      translations: {},
      latlng: [
        50.83333333,
        4
      ],
      landlocked: false,
      borders: [
        "FRA",
        "DEU",
        "LUX",
        "NLD"
      ],
      area: 30528,
      flag: "🇧🇪",
      maps: {
        googleMaps: "https://goo.gl/maps/UQQzat85TCtPRXAL8",
        openStreetMaps: "https://www.openstreetmap.org/relation/52411"
      },
      population: 11555997,
      gini: {
        2018: 27.2
      },
    fifa: "BEL",
      flags: {
        png: "https://flagcdn.com/w320/be.png",
        svg: "https://flagcdn.com/be.svg",
        alt: "The flag of Belgium is composed of three equal vertical bands of black, yellow and red."
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/be.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/be.svg"
      },      
      capitalInfo: {
        latlng: [
          50.83,
          4.33
        ]
      },
      postalCode: {
        format: "####",
      }
    }}
  }
import { useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CountriesAdapter, Currencies } from '../../infrastructure/apiTypes';
import useCountries from '../../infrastructure/useCountries';
import List from '../../components/list/List';
import Image from '../../components/image/image';
import Button from '../../components/button/Button';
import Borders from '../../components/borders/Borders';

const getCurrency = (cur: Currencies): string => {
  return Object.keys(cur).at(0) || '';
};

type CountryProps = {
  countryData?: CountriesAdapter;
};

export const Country = ({ countryData }: CountryProps) => {
  const params = useParams();
  const { countries } = useCountries();

  const selectedContry = countries?.filter(
    (item) => item.name === params.country
  )[0];
  const countryInfo = countryData !== undefined ? countryData : selectedContry;

  if (!countryInfo) {
    return null;
  }

  const currency = getCurrency(countryInfo.currencies);
  const leng: string[] = Object.values(countryInfo.languages);

  const borders = countryInfo.borders.map((country) => {
    const bordersNames = countries?.filter((item) => item.cca3 === country)[0];
    return bordersNames?.name;
  });

  return (
    <div className='country'>
      <Button
        description='Back'
        variant='country__btn'
        redirectTo='/countriesApp/'
        icon={faArrowLeft}
      />
      <section className='country__info'>
        <Image
          variant='country__flag'
          src={countryInfo.flag}
          alt={`Flag ${countryInfo.name}`}
        />
        <div className='country__data'>
          <h2 className='country__name'>{countryInfo.name}</h2>
          <List
            variant='country__details'
            listData={[
              {
                title: 'Native Name',
                description: countryInfo.name,
              },
              {
                title: 'Population',
                description: countryInfo.population?.toLocaleString(),
              },
              {
                title: 'Region',
                description: countryInfo.region,
              },
              {
                title: 'Sub Region',
                description: countryInfo.subregion,
              },
              {
                title: 'Capital',
                description: countryInfo.capital[0],
              },
              {
                title: 'Top Level Domain',
                description: countryInfo.tld?.at(0)?.toString() || '',
              },
              {
                title: 'Currencies',
                description: currency,
              },
              {
                title: 'Lenguages',
                description: leng.join(', '),
              },
            ]}
          />
          <Borders title='Border Countries:' bordersList={borders} />
        </div>
      </section>
    </div>
  );
};

import { Link } from 'react-router-dom';

type bordersProps = {
  title: string;
  bordersList: string[];
};

const Borders = ({ title, bordersList }: bordersProps) => {
  return (
    <div className='country__borders'>
      <label>{title}</label>
      {bordersList?.map((item) => (
        <span key={item}>
          <Link to={`/countries/${item}`}>{item}</Link>
        </span>
      ))}
    </div>
  );
};

export default Borders;

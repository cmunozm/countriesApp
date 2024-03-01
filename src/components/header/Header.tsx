import Toggle from '../toggle/Toggle';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  console.log('_____Header____');
  return (
    <header className='header'>
      <a href='/'>{title}</a>
      <Toggle />
    </header>
  );
};

export default Header;

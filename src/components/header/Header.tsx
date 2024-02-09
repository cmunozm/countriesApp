import Toggle from '../toggle/Toggle';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className='header'>
      <a>{title}</a>
      <Toggle />
    </header>
  );
};

export default Header;

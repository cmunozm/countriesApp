import Toggle from '../toggle/Toggle';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className='header'>
      <a>{title}</a>
      <Toggle isDark={false} onChangeTheme={() => {}} />
    </header>
  );
};

export default Header;

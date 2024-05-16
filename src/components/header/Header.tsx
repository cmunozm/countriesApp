type HeaderProps = {
  title: string;
  children: JSX.Element;
};

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className='header'>
      <a href='/countriesApp/'>{title}</a>
      {children}
    </header>
  );
};

export default Header;

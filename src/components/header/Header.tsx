type HeaderProps = {
  title: string;
  toggle: JSX.Element;
};

const Header = ({ title, toggle }: HeaderProps) => {
  return (
    <header className='header'>
      <a href='/'>{title}</a>
      {toggle}
    </header>
  );
};

export default Header;

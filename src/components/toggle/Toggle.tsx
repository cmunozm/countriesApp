import { Theme } from '../../infrastructure/apiTypes';

type toggleProps = {
  theme: Theme;
  handleClick: React.MouseEventHandler<HTMLInputElement>;
};
const Toggle = ({ theme, handleClick }: toggleProps) => {
  return (
    <label className='switch'>
      <span className='switch__inputContainer'>
        <input
          className='switch__input'
          type='checkbox'
          name='toggleTheme'
          onClick={handleClick}
        />
        <span />
      </span>
      <span>{theme?.isDark ? 'Dark' : 'Light'} Mode</span>
    </label>
  );
};

export default Toggle;

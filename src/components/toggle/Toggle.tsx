import { useContext } from 'react';
import { themeContext } from '../../infrastructure/themeContext';

const Toggle = () => {
  const { theme, handleTheme } = useContext(themeContext);

  // const onChangeTheme = () => setTheme({ isDark: !theme });

  return (
    <label className='switch'>
      <span className='switch__inputContainer'>
        <input
          className='switch__input'
          type='checkbox'
          name='toggleTheme'
          onClick={handleTheme}
        />
        <span />
      </span>
      <span>{theme.isDark ? 'Dark' : 'Light'} Mode</span>
    </label>
  );
};

export default Toggle;

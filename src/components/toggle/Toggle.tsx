type ToggleProps = {
  isDark: boolean;
  onChangeTheme: () => void;
};

const Toggle = ({ isDark, onChangeTheme }: ToggleProps) => {
  return (
    <label className='switch'>
      <span className='switch__inputContainer'>
        <input
          className='switch__input'
          type='checkbox'
          name='toggleTheme'
          onClick={onChangeTheme}
        />
        <span />
      </span>
      <span>{isDark ? 'Dark' : 'Light'} Mode</span>
    </label>
  );
};

export default Toggle;

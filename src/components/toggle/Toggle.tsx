import classes from './toggle.module.scss';

type ToggleProps = {
  isDark: boolean;
  onChangeTheme: () => void;
};

const Toggle = ({ isDark, onChangeTheme }: ToggleProps) => {
  return (
    <label className={classes.switch}>
      <span className={classes.switch__inputContainer}>
        <input
          className={classes.switch__input}
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

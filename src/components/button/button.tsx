import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import Icon from '../icon/Icon';

export type buttonProps = {
  /**Button text */
  description: string;
  /**Icon on the left side of the button  */
  icon?: IconProp;
  /**Class name*/
  variant?: string;
  /**url to which you are directed when you click on it */
  redirectTo?: string;
};

/**Botton component */
const Button = ({ description, icon, variant, redirectTo }: buttonProps) => {
  if (redirectTo) {
    return (
      <Link to={redirectTo} className={variant}>
        {icon && <Icon icon={icon} />}
        {description}
      </Link>
    );
  }

  return (
    <button className={variant}>
      {icon && <Icon icon={icon} />}
      {description}
    </button>
  );
};

export default Button;

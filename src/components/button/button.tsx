import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import Icon from '../icon/Icon';

type buttonProps = {
  description: string;
  icon?: IconProp;
  variant?: string;
  redirectTo?: string;
};

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

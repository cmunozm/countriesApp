import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconProps = {
  icon: IconProp;
  className: string;
};

const Icon = ({ icon, className }: IconProps) => {
  return <FontAwesomeIcon className={className} icon={icon} />;
};

export default Icon;

import React from 'react';
import classes from './Button.module.scss';

const Button: React.FC<{ clicked: () => void; btnType: string }> = ({
  clicked,
  btnType,
  children,
}) => (
  <button
    className={[classes.Button, classes[btnType]].join(' ')}
    onClick={clicked}
  >
    {children}
  </button>
);

export default Button;

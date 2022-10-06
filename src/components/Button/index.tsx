import React from 'react';
import classNames from 'classnames';

// button size
export enum ButtonSize {
  Large = 'large',
  Small = 'small'
}

// button type
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning',
  Success = 'success',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  buttonType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<BaseButtonProps> = props => {
  const { disabled, size, buttonType, children, href } = props;

  // 默认添加button-class类
  const classes = classNames('button-class', {
    [`button-${buttonType}`]: buttonType,
    [`button-${size}`]: size,
    disabled: buttonType === ButtonType.Link && disabled
  });

  if (buttonType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  buttonType: ButtonType.Default
};

export default Button;

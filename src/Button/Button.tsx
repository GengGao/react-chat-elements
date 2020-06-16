import React from 'react';
import classNames from 'classnames';
import './Button.css';

export type Icon = {
  component?: React.ReactNode;
  float?: 'left' | 'right';
  color?: string;
  size?: number;
  className?: string;
};

export type ButtonProps = {
  buttonRef?: React.Ref<HTMLButtonElement>;
  type?: 'outlined' | 'transparent';
  disabled?: boolean;
  title?: string;
  text?: string;
  color?: string;
  backgroundColor?: string;
  onClick?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
  className?: string;
  icon?: Icon;
};

export const Button: React.FC<ButtonProps> = ({
  buttonRef,
  title,
  text,
  type,
  className,
  backgroundColor = '#3979aa',
  color = 'white',
  disabled,
  onClick,
  icon,
}) => (
  <button
    ref={buttonRef}
    title={title}
    className={classNames('rce-button', type, className)}
    style={{
      backgroundColor,
      color,
      borderColor: backgroundColor,
    }}
    disabled={disabled}
    onClick={onClick}
  >
    {icon ? (
      <span className="rce-button-icon--container">
        {(icon.float === 'right' || !icon.float) && <span>{text}</span>}

        <span
          style={{
            float: icon.float,
            fontSize: icon.size || 12,
          }}
          className={classNames('rce-button-icon', icon.className)}
        >
          {icon.component}
        </span>

        {icon.float === 'left' && <span>{text}</span>}
      </span>
    ) : (
      <span>{text}</span>
    )}
  </button>
);

export default Button;

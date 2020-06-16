import classNames from 'classnames';
import React, { useState } from 'react';
import './Dropdown.css';
import { Button, Icon, ButtonProps } from '../Button/Button';

export type DropdownItem =
  | {
      icon?: Icon;
      text?: string;
    }
  | string;

export type DropdownProps = {
  className?: string;
  animationType?: 'fade' | 'default';
  animationPosition?: 'northwest' | 'northeast' | 'southwest' | 'southeast';
  items: DropdownItem[];
  onSelect?: (index: number) => void;
  title?: string;
  buttonProps?: ButtonProps;
};

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  className,
  buttonProps,
  animationType = 'default',
  animationPosition = 'northwest',
  onSelect,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={classNames('rce-dropdown-container', className)}
      onBlur={() => setShow(false)}
    >
      {<Button {...buttonProps} onClick={() => setShow(!show)} />}
      <div
        className={classNames(
          'rce-dropdown',
          animationType,
          'rce-dropdown-open__' + animationPosition,
          { 'dropdown-hide': !show },
          { 'dropdown-show': show },
        )}
      >
        <ul>
          {title && <span className="rce-dropdown-title">{title}</span>}
          {items.map((item, i) => (
            <li key={i} onMouseDown={() => onSelect?.(i)}>
              {item instanceof Object ? (
                item.icon ? (
                  <span className="rce-button-icon--container">
                    {(item.icon.float === 'right' || !item.icon.float) && (
                      <a>{item.text}</a>
                    )}

                    <span
                      style={{
                        float: item.icon.float,
                        color: item.icon.color,
                        fontSize: item.icon.size || 12,
                      }}
                      className={classNames(
                        'rce-button-icon',
                        item.icon.className,
                      )}
                    >
                      {item.icon.component}
                    </span>

                    {item.icon.float === 'left' && <a>{item.text}</a>}
                  </span>
                ) : (
                  <a>{item.text}</a>
                )
              ) : (
                <a>{item}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

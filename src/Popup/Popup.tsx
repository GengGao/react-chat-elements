import classNames from 'classnames';
import React from 'react';
import './Popup.css';
import { Button, ButtonProps } from '../Button/Button';

export type PopupProps = {
  className?: string;
  type?: string;
  show?: boolean;
  header?: string;
  headerButtons?: ButtonProps[];
  text?: string;
  color?: string;
  footerButtons?: ButtonProps[];
  renderHeader?: () => React.ReactNode;
  renderContent?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
};

export const Popup: React.FC<PopupProps> = ({
  show,
  color = '#333',
  type,
  text,
  header,
  headerButtons = [],
  className,
  renderHeader,
  renderContent,
  renderFooter,
  footerButtons = [],
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className={classNames('rce-popup-wrapper', type, className)}>
      <div className="rce-popup">
        {renderHeader ? (
          <div className="rce-popup-header">{renderHeader()}</div>
        ) : (
          <div className="rce-popup-header">
            <span>{header}</span>
            {header && headerButtons.map((x, i) => <Button key={i} {...x} />)}
          </div>
        )}
        <div className="rce-popup-content" style={{ color }}>
          {renderContent ? renderContent() : text}
        </div>
        <div className="rce-popup-footer">
          {renderFooter
            ? renderFooter()
            : footerButtons.map((x, i) => <Button key={i} {...x} />)}
        </div>
      </div>
    </div>
  );
};

export default Popup;
